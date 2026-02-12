# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a company website for **DnP Technologies Private Limited**, an IT Services & Consulting firm specializing in Telecom Solutions, Cloud Infrastructure, DevOps, and Digital Transformation. The website is built as a modern Next.js application with TypeScript and uses MariaDB for data persistence.

## Technology Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 + Flowbite React
- **State Management:** Zustand
- **Database:** MariaDB (with `lower_case_table_names=1`)
- **ORM:** Prisma 6.19.2
- **Authentication:** NextAuth.js 4.24.13
- **Form Handling:** React Hook Form + Zod validation
- **Data Fetching:** TanStack Query (React Query)
- **Tables:** TanStack Table
- **Charts:** Recharts
- **Icons:** Lucide React
- **Email:** Nodemailer
- **Date/Time:** date-fns

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Database operations
npx prisma generate          # Generate Prisma client
npx prisma db push          # Push schema changes to database
npx prisma studio           # Open Prisma Studio GUI
npx prisma migrate dev      # Create and apply migrations
```

## Database Setup

The project uses MariaDB with the following configuration:

**Database Name:** `dnp_website`
**User:** `dnp_user`
**Important:** MariaDB is configured with `lower_case_table_names=1` for case-insensitive table names.

Connection details are in `.env`:
```
DATABASE_URL="mysql://dnp_user:dnp_password@localhost:3306/dnp_website"
```

## Project Structure

```
website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── services/     # Services page
│   │   ├── contact/      # Contact page with form
│   │   ├── api/          # API routes
│   │   │   └── contact/  # Contact form submission endpoint
│   │   ├── layout.tsx    # Root layout with Header/Footer
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles and Tailwind config
│   ├── components/       # React components
│   │   ├── Header.tsx    # Navigation header (client component)
│   │   └── Footer.tsx    # Site footer
│   ├── lib/              # Utility libraries
│   │   ├── prisma.ts     # Prisma client singleton
│   │   └── email.ts      # Email notification utilities
│   └── types/            # TypeScript type definitions
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
└── .env                  # Environment variables (not in git)
```

## Architecture

### Pages & Routing

The website follows Next.js App Router conventions:
- **Home (/)**: Hero section, stats, services overview, why choose us, CTA
- **Services (/services)**: Detailed service listings (Telecom, Integration, Cloud, DevOps, Software, Consulting)
- **About (/about)**: Company overview, leadership team, certifications, industries served
- **Contact (/contact)**: Contact form with React Hook Form + Zod validation

### Data Flow

1. **Contact Form Submission:**
   - User fills form on `/contact` page
   - React Hook Form validates client-side with Zod schema
   - Form submits to `/api/contact` API route
   - API validates with Zod, saves to database via Prisma
   - Email notification sent via Nodemailer (non-blocking)
   - Success response returned to client

2. **Database Schema:**
   - `ContactSubmission` model stores all contact form submissions
   - Fields: name, email, company, phone, service, message, createdAt, read

### Component Patterns

- **Client Components:** Use `"use client"` directive (e.g., Header with useState for mobile menu)
- **Server Components:** Default for pages, better performance
- **Layout:** Root layout includes Header, Footer, and Geist fonts

### Styling Approach

- Tailwind CSS utility classes throughout
- Flowbite React for pre-built UI components
- Custom gradient utilities: `gradient-bg`, `text-gradient`
- Responsive design with mobile-first approach
- Lucide React icons for consistent iconography

## Environment Variables

Required environment variables in `.env`:

```bash
# Database
DATABASE_URL="mysql://dnp_user:dnp_password@localhost:3306/dnp_website"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-in-production"

# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
NOTIFICATION_EMAIL="contact@dnptechnologies.com"
```

## Company Context

When modifying content, refer to these key company documents:
- `Company.md` - Complete company profile, services, target markets
- `Technologies.md` - Approved technology stack
- `INSTRUCTION.md` - Session history and development log

**Core Services:**
- Telecom Solution Development (AAA, RADIUS, 3G/4G/5G, Billing)
- Solution Integration (Enterprise, OSS/BSS, API, Legacy Modernization)
- Cloud Services (AWS, Azure, GCP - Migration, Management, Multi-Cloud)
- DevOps (CI/CD, Containers, Kubernetes, Automation)
- Software Development (Web, Enterprise, Mobile)
- IT Consulting & Automation

**Key Personnel:**
- Ms. Padma Tailor - Director (Operations & Business Development)
- Mr. Manoj Kumar - Director (Technical Delivery & Project Management)
- Mr. Dinesh Kumar Tailor - Technical Advisor (15+ years DevOps/Cloud/Telecom)

## Important Notes

- The website content should align with `Company.md` company profile
- All technology choices must match `Technologies.md` stack
- Database operations use Prisma ORM exclusively
- Email sending is non-blocking to avoid delaying API responses
- Navigation is responsive with mobile hamburger menu
- All pages use Geist font family from next/font
