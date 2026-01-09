# idweo Website Layout Setup

## Overview
This document describes the MainLayout component setup for the idweo SaaS platform - an engineering intelligence platform that analyzes GitHub/Jira data.

## Design System

### Colors
- **Primary**: Deep Navy `#1B263B`
- **Secondary**: Slate Blue `#415A77`
- **Accent**: Mint Green `#00D47E` (for growth/success actions)
- **Footer Background**: Dark Chocolate/Charcoal Brown `#2C2416`

### Typography
- **Font Family**: Inter (loaded from Google Fonts)
- **Fallback**: sans-serif

### Tech Stack
- React
- TypeScript
- Tailwind CSS
- Lucide-React (for icons)
- React Router DOM
- React Helmet Async (for SEO)

## Components

### MainLayout / Layout Component
Location: `src/components/Layout.tsx` (aliased as `MainLayout.tsx`)

#### Features

**1. Sticky Transparent-to-Solid Navbar**
- Starts transparent at page top
- Transitions to solid navy (`#1B263B`) background after scrolling 50px
- Smooth color transitions for all elements
- Fixed position with z-index of 50

**2. Navigation Links**
- Product
- Solutions
- Pricing
- Contact

**3. CTA Button**
- "Get Started" button in Mint Green (`#00D47E`)
- Prominent placement in navbar
- Hover effects with shadow

**4. Mobile Responsive**
- Hamburger menu for mobile devices
- Slide-in menu with all navigation options
- Touch-friendly spacing

**5. Footer (4-Column Layout)**
- **Column 1 - Our Sites**: Home, Product, Solutions, Pricing
- **Column 2 - About Us**: Our Story, Team, Careers, Blog
- **Column 3 - Resources**: Documentation, API Reference, Support Center, Privacy Policy
- **Column 4 - Contact**: Email, Phone, Location, Social Media Icons

Footer features:
- Dark brown background (`#2C2416`)
- Mint green accent color for icons
- Social media icons (LinkedIn, Twitter, GitHub)
- Copyright notice
- Hover effects on links

## Pages Created

### 1. Product Page (`/product`)
- Overview of engineering intelligence platform
- Key features in grid layout
- Focus on GitHub/Jira integration

### 2. Solutions Page (`/solutions`)
- Role-specific solutions (CEOs, CTOs, EMs, Developers)
- Bordered sections with accent color
- Clear value propositions

### 3. Pricing Page (`/pricing`)
- Three-tier pricing: Starter (Free), Professional ($49), Enterprise (Custom)
- Feature comparison with checkmarks
- Highlighted "Popular" plan
- Clear CTAs for each tier

### 4. Get Started Page (`/get-started`)
- Sign-up form with validation
- Team size selector
- Trust indicators (14-day free trial, no credit card, 5-minute setup)
- Clean, conversion-focused design

## Configuration Files

### tailwind.config.js
```javascript
{
  colors: {
    primary: '#1B263B',      // Deep Navy
    secondary: '#415A77',    // Slate Blue
    accent: '#00D47E',       // Mint Green
    'dark-brown': '#2C2416', // Footer background
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
  }
}
```

### index.html
- Inter font loaded from Google Fonts
- Theme color set to primary navy
- Proper meta tags for SEO

### index.css
- Custom scrollbar styling
- Font family applied globally
- Base Tailwind layers

## Usage

### Import in Pages
```typescript
import { Layout } from '../components/Layout';
// or
import { MainLayout } from '../components/MainLayout';

export const YourPage = () => {
  return (
    <Layout seo={{ title: 'Your Page Title', description: '...' }}>
      {/* Your page content */}
    </Layout>
  );
};
```

### Running the Dev Server
```bash
cd site-web
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

## Features Implemented

✅ Sticky transparent-to-solid navbar  
✅ Smooth scroll animations  
✅ Mobile responsive hamburger menu  
✅ 4-column footer with dark brown background  
✅ Mint green accent for CTAs  
✅ Inter font integration  
✅ Custom color palette  
✅ SEO optimization  
✅ Structured data for search engines  
✅ Social media icons in footer  
✅ Hover effects and transitions  
✅ All navigation pages created  
✅ Clean, modern UI/UX  

## Next Steps

1. Add actual content to Home, About, and Contact pages
2. Implement form submission logic for Get Started page
3. Add more detailed product information
4. Create team/careers/blog pages
5. Integrate with backend API
6. Add analytics tracking
7. Implement proper authentication flow
8. Add loading states and error handling

## Notes

- All Humatch references have been replaced with idweo
- Footer uses dark chocolate/charcoal brown background as specified
- Logo uses the existing idweo.png asset
- Color scheme follows the Modern Tech/Data-driven theme
- All links are functional and use React Router
