import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage (In production, use a proper database)
let users = [];
let bookings = [];
let contacts = [];
let memberships = [];

// Email configuration (configure with your email service)
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Fitness Club API is running' });
});

// User registration
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
      phone: phone || '',
      createdAt: new Date().toISOString()
    };

    users.push(user);

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// User login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Name, email, subject, and message are required' });
    }

    const contact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      subject,
      message,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    contacts.push(contact);

    // Send email notification (configure with your email settings)
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'admin@fitnessclub.com', // Admin email
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      message: 'Contact form submitted successfully',
      contactId: contact.id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Class booking
app.post('/api/book-class', authenticateToken, (req, res) => {
  try {
    const { className, date, time } = req.body;

    if (!className || !date || !time) {
      return res.status(400).json({ error: 'Class name, date, and time are required' });
    }

    const booking = {
      id: Date.now().toString(),
      userId: req.user.id,
      className,
      date,
      time,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    bookings.push(booking);

    res.status(201).json({
      message: 'Class booked successfully',
      booking
    });
  } catch (error) {
    console.error('Class booking error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user bookings
app.get('/api/my-bookings', authenticateToken, (req, res) => {
  try {
    const userBookings = bookings.filter(booking => booking.userId === req.user.id);
    res.json({ bookings: userBookings });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Membership signup
app.post('/api/membership', authenticateToken, (req, res) => {
  try {
    const { plan, paymentMethod } = req.body;

    if (!plan || !paymentMethod) {
      return res.status(400).json({ error: 'Plan and payment method are required' });
    }

    const membership = {
      id: Date.now().toString(),
      userId: req.user.id,
      plan,
      paymentMethod,
      status: 'active',
      startDate: new Date().toISOString(),
      nextBilling: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days from now
    };

    memberships.push(membership);

    res.status(201).json({
      message: 'Membership activated successfully',
      membership
    });
  } catch (error) {
    console.error('Membership signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user membership
app.get('/api/my-membership', authenticateToken, (req, res) => {
  try {
    const membership = memberships.find(m => m.userId === req.user.id && m.status === 'active');
    if (!membership) {
      return res.status(404).json({ error: 'No active membership found' });
    }
    res.json({ membership });
  } catch (error) {
    console.error('Get membership error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get gym statistics (public endpoint)
app.get('/api/stats', (req, res) => {
  try {
    const stats = {
      totalMembers: users.length,
      totalBookings: bookings.length,
      activeClasses: 25, // Static for demo
      satisfiedCustomers: Math.floor(users.length * 0.95) // 95% satisfaction rate
    };
    res.json(stats);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin routes (simplified for demo)
app.get('/api/admin/contacts', (req, res) => {
  // In production, add proper admin authentication
  res.json({ contacts });
});

app.get('/api/admin/bookings', (req, res) => {
  // In production, add proper admin authentication
  res.json({ bookings });
});

app.get('/api/admin/memberships', (req, res) => {
  // In production, add proper admin authentication
  res.json({ memberships });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Fitness Club API server running on port ${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
});

export default app;