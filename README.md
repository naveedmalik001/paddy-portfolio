# Paddy's Professional Portfolio

A modern, responsive Next.js portfolio website for a professional content creator and influencer specializing in brand campaigns, lifestyle photography, and social media strategy.

## 🎨 Features

- **Modern Design**: Clean, responsive layout with warm caramel/terracotta color theme
- **Video Portfolio**: Dynamic YouTube video slider with thumbnail previews
- **Contact Form**: Full validation, mock API integration, and success states
- **Project Showcase**: Filterable portfolio grid with category support
- **Mobile Responsive**: Fully optimized for all device sizes
- **SEO Optimized**: Meta tags, OpenGraph, and Twitter cards
- **Accessibility**: Keyboard navigation and ARIA attributes
- **Performance**: Lazy loading, optimized images, and efficient code splitting

## 🚀 Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS 4.x
- **TypeScript**: Full type safety
- **Language**: JavaScript/TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paddy_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
paddy_portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── videos/        # Mock video API
│   │   │   └── enquiry/       # Mock contact form API
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer
│   │   ├── StatsGrid.tsx      # Statistics display
│   │   ├── ServicesGrid.tsx   # Services showcase
│   │   ├── ProcessSteps.tsx   # Workflow display
│   │   ├── PortfolioGrid.tsx  # Project grid
│   │   ├── VideoSlider.tsx    # Video carousel
│   │   ├── VideoModal.tsx     # Video player modal
│   │   └── ContactForm.tsx    # Contact form
│   ├── lib/                   # Utility functions
│   │   └── api.ts             # API helpers
│   └── data/                  # Data and types
│       └── seed.ts            # Sample data
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

## 🎯 Components Overview

### Core Components

- **Header**: Sticky navigation with mobile menu and CTA button
- **Hero**: Landing section with stats, CTA buttons, and hero image
- **StatsGrid**: Animated statistics display with hover effects
- **ServicesGrid**: 6-column service grid with icons
- **ProcessSteps**: 5-step workflow visualization
- **PortfolioGrid**: Filterable project showcase
- **VideoSlider**: YouTube video carousel with modal player
- **ContactForm**: Multi-step form with validation
- **Footer**: Links, social media, and contact information

### Data Structure

The site uses TypeScript interfaces defined in `data/seed.ts`:

```typescript
interface Video {
  id: string;
  youtubeId: string;
  title: string;
  caption: string;
  deliverables: string[];
  thumbnail: string;
  date: string;
}

interface Project {
  id: string;
  title: string;
  brand: string;
  category: string;
  thumbnail: string;
  videoId?: string;
  description: string;
  deliverables: string[];
  date: string;
  tags: string[];
}
```

## 🔄 API Integration

### Current Mock Endpoints

1. **GET /api/videos**
   - Returns sample video data
   - Simulates 300ms delay
   - Used by VideoSlider component

2. **POST /api/enquiry**
   - Handles contact form submissions
   - Simulates 400ms delay
   - Returns ticket ID for tracking
   - Includes validation and error handling

### Real Backend Integration

To connect to your real backend, update these files:

1. **src/app/api/videos/route.ts**
   ```typescript
   // Replace mock data with real API call
   const response = await fetch('YOUR_BACKEND_API/videos')
   ```

2. **src/app/api/enquiry/route.ts**
   ```typescript
   // Replace mock logic with real backend integration
   // Add database operations
   // Add email notifications
   // Add CRM integration
   ```

3. **src/lib/api.ts**
   ```typescript
   const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'YOUR_BACKEND_URL'
   ```

## 🎨 Customization

### Color Theme

Colors are defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#8C4A2F',    // Warm caramel
    light: '#B86F42',        // Lighter terracotta
  },
  secondary: '#B86F42',      // Terracotta
  accent: '#f5e9dc',        // Light cream
  background: '#050505',     // Dark background
  surface: '#1a1a1a',       // Card backgrounds
}
```

### Typography

The font configuration in `layout.tsx` uses Inter by default. To customize:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})
```

### Content Updates

1. **Videos**: Update `seedVideos` in `data/seed.ts`
2. **Projects**: Update `seedProjects` in `data/seed.ts`
3. **Stats**: Update `stats` array in `data/seed.ts`
4. **Services**: Update `services` array in `data/seed.ts`
5. **Brands**: Update `brands` array in `data/seed.ts`

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- **Mobile**: < 768px (stacked layouts, hamburger menu)
- **Tablet**: 768px - 1024px (medium layouts)
- **Desktop**: > 1024px (full layouts)

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub/GitLab
2. Connect repository to Vercel
3. Set environment variables:
   - `NEXT_PUBLIC_API_BASE` (if using external API)
4. Deploy automatically

### Other Platforms

```bash
# Build
npm run build

# The .next folder contains the production build
# Deploy to your preferred platform
```

## 📊 Analytics & Monitoring

### Google Analytics

Add to `src/app/layout.tsx`:

```typescript
import Script from 'next/script'

// In body
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Error Tracking

Integration points for error tracking services:

- **Sentry**: `src/lib/api.ts` has ErrorHandler class
- **LogRocket**: Can be added to layout.tsx
- **Bugsnag**: Integration available

## 🔒 Security Features

- **Input sanitization** via Validation class
- **CSRF protection** (Next.js built-in)
- **Rate limiting** (implement in API routes)
- **HTTPS enforcement** (production)

## 📈 Performance Optimization

- **Lazy loading**: Images and videos
- **Code splitting**: Automatic with Next.js
- **Caching**: API responses cached for 5 minutes
- **Optimization**: Next.js Image component usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or support:

- Email: hello@paddy.com
- Instagram: @paddy
- Issues: Create an issue in the repository

---

## 🔄 Next Steps for Production

1. **Backend Integration**
   - Replace mock APIs with real endpoints
   - Add database operations
   - Implement email notifications

2. **Content Management**
   - Set up CMS for easy content updates
   - Implement image optimization
   - Add video hosting solution

3. **Analytics**
   - Set up Google Analytics
   - Add conversion tracking
   - Implement heatmaps

4. **SEO**
   - Generate sitemap
   - Add structured data
   - Implement schema markup

5. **Performance**
   - Set up CDN for assets
   - Implement progressive loading
   - Add service worker for caching

---

Built with ❤️ using Next.js and Tailwind CSS