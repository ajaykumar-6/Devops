# Fitness Club Website

A modern, responsive gym website built with React, TypeScript, and Tailwind CSS, featuring a Node.js backend for complete functionality.

## Features

### Frontend
- **Modern Design**: Dark theme with bold red accents matching professional gym aesthetics
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth animations, hover effects, and micro-interactions
- **Complete Sections**: Hero, About, Services, Classes, Trainers, Pricing, Contact
- **Navigation**: Smooth scrolling navigation with mobile hamburger menu

### Backend API
- **User Authentication**: Registration and login with JWT tokens
- **Contact Management**: Contact form handling with email notifications
- **Class Booking**: Authenticated users can book fitness classes
- **Membership System**: Membership plan selection and management
- **Admin Dashboard**: Basic admin endpoints for managing data

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT)
- **Email**: Nodemailer
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fitness-club-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp server/.env.example server/.env
   ```
   Edit `server/.env` with your configuration:
   - JWT_SECRET: Use a strong, unique secret
   - EMAIL_USER/EMAIL_PASS: Configure for contact form emails
   - PORT: Server port (default: 3001)

### Development

**Run both frontend and backend:**
```bash
npm run dev:full
```

**Or run separately:**

Frontend only:
```bash
npm run dev
```

Backend only:
```bash
npm run server
```

### Production Build

```bash
npm run build
```

## API Endpoints

### Public Endpoints
- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/stats` - Get gym statistics

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Protected Endpoints (requires JWT token)
- `POST /api/book-class` - Book a fitness class
- `GET /api/my-bookings` - Get user's bookings
- `POST /api/membership` - Sign up for membership
- `GET /api/my-membership` - Get user's membership

### Admin Endpoints
- `GET /api/admin/contacts` - Get all contact submissions
- `GET /api/admin/bookings` - Get all bookings
- `GET /api/admin/memberships` - Get all memberships

## Project Structure

```
├── src/
│   ├── components/           # React components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services section
│   │   ├── Classes.tsx      # Classes section
│   │   ├── Trainers.tsx     # Trainers section
│   │   ├── Pricing.tsx      # Pricing section
│   │   ├── Contact.tsx      # Contact section
│   │   └── Footer.tsx       # Footer component
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── server/
│   ├── index.js             # Express server
│   └── .env.example         # Environment variables template
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## Customization

### Styling
- Colors defined in `tailwind.config.js`
- Custom animations and keyframes included
- Responsive breakpoints configured

### Content
- Update images with your own gym photos
- Modify trainer profiles, classes, and pricing plans
- Customize contact information and business hours

### Backend
- Add database integration (currently uses in-memory storage)
- Implement payment processing (Stripe/PayPal)
- Enhance admin features
- Add more sophisticated authentication

## Deployment

### Frontend
Deploy the built assets to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

### Backend
Deploy to any Node.js hosting service:
- Heroku
- Railway
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions:
- Create an issue in the repository
- Contact: info@fitnessclub.com

---

Built with ❤️ for the fitness community