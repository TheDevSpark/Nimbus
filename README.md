# Nimbus - Property Management System

A modern property management platform built with Next.js 15, featuring dashboard analytics, property listings, scheduling & calendar, and document management.

## 🚀 Features

### ✅ Implemented
- **Dashboard**: Property analytics with charts, metrics, and recent listings
- **Property Management**: Comprehensive property listings with filtering and search
- **Scheduling & Calendar**: Month-view calendar with property-filtered events
- **Document Management**: File library with search, filtering, and tagging
- **Analytics Dashboard**: Comprehensive business analytics with revenue trends, market insights, and performance metrics
- **Monetization**: Pricing plans, revenue tracking, and commission management system

### 🔄 In Development
- Client & Lead Management
- API endpoints for data persistence
- User authentication & role-based access control
- Real-time notifications
- Advanced reporting features

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: JavaScript (ES6+)
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Build Tool**: Turbopack
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Sidebar.js      # Navigation sidebar
│   │   ├── PropertyCard.js # Property display card
│   │   ├── Button.js       # Button component
│   │   └── ...
│   ├── analytics/          # Business analytics
│   │   └── page.js         # Revenue trends, market insights, performance metrics
│   ├── calendar/           # Calendar & scheduling
│   │   └── page.js         # Calendar view with events
│   ├── documents/          # Document management
│   │   └── page.js         # Document library
│   ├── monetization/       # Revenue & pricing management
│   │   └── page.js         # Pricing plans, commissions, revenue tracking
│   ├── property-list/      # Property management
│   │   └── page.js         # Property listings
│   ├── data.js            # Mock data for development
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Dashboard home
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nimbus
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Current Data Model

### Properties
- Basic property information (title, price, type, status)
- Location and specifications (beds, baths, sqft)
- Images and metadata (views, creation date)

### Events (Mock)
- Property showings, meetings, inspections
- Date/time scheduling with property association
- Event types and filtering

### Documents (Mock)
- File metadata (name, size, type, creation date)
- Property association and tagging system
- Search and filtering capabilities

### Analytics Data (Mock)
- Revenue trends and commission tracking
- Property performance by type and market
- Lead source conversion metrics
- Agent performance and sales data

### Monetization Data (Mock)
- Subscription plans and pricing tiers
- Revenue breakdown by source
- Commission management and payment tracking
- Customer subscription lifecycle

## 🔮 Roadmap

### Phase 1: Core Features ✅
- [x] Dashboard with analytics
- [x] Property management interface
- [x] Calendar & scheduling UI
- [x] Document management UI
- [x] Analytics dashboard with business insights
- [x] Monetization system with pricing & commissions

### Phase 2: Backend Integration
- [ ] API routes for CRUD operations
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] File upload & storage (AWS S3/Azure/GCS)
- [ ] User authentication & authorization
- [ ] Real-time data synchronization

### Phase 3: Advanced Features
- [ ] Client & Lead Management system
- [ ] Real-time notifications
- [ ] Advanced reporting & exports
- [ ] Mobile responsiveness optimization
- [ ] API documentation
- [ ] Integration with external services

### Phase 4: Production Ready
- [ ] Testing suite (unit, integration, e2e)
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Deployment automation
- [ ] Monitoring & logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@nimbus-pm.com or create an issue in the repository.
