# idweo Website

> **Engineering Intelligence Platform** - Track efficiency and growth through GitHub/Jira analytics

A modern, SEO-optimized SaaS marketing website built with React, TypeScript, Tailwind CSS, and Vite.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Format code
npm run format
```

The development server will start at `http://localhost:5173` (or next available port).

---

## ✨ Features

- ⚡️ **Fast**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern Design**: Custom color palette with Deep Navy, Slate Blue, and Mint Green
- 🔄 **Dynamic Navbar**: Transparent-to-solid sticky navigation
- 📱 **Fully Responsive**: Mobile-first with hamburger menu
- 🔍 **SEO Optimized**: Meta tags, structured data, Open Graph
- 🎯 **TypeScript**: Full type safety
- 🎨 **Tailwind CSS**: Utility-first styling
- 🚀 **Production Ready**: Optimized builds

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Deep Navy** (Primary) | `#1B263B` | Brand color, navbar, headings |
| **Slate Blue** (Secondary) | `#415A77` | Supporting text, hover states |
| **Mint Green** (Accent) | `#00D47E` | CTAs, success states, growth |
| **Dark Brown** (Footer) | `#2C2416` | Footer background |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Mobile-first**: Responsive text sizing

📖 See `DESIGN_SYSTEM.md` for complete design guidelines.

---

## 📁 Project Structure

```
site-web/
├── public/
│   ├── idweo.png           # Logo (static)
│   └── robots.txt          # SEO
├── src/
│   ├── assets/
│   │   └── idweo.png       # Logo (imported)
│   ├── components/
│   │   ├── Layout.tsx      # Main layout (navbar + footer)
│   │   ├── MainLayout.tsx  # Alias for Layout
│   │   ├── SEO.tsx         # SEO component
│   │   └── index.ts        # Component exports
│   ├── pages/
│   │   ├── Home.tsx        # Landing page
│   │   ├── Product.tsx     # Product overview
│   │   ├── Solutions.tsx   # Solutions by role
│   │   ├── Pricing.tsx     # Pricing tiers
│   │   ├── GetStarted.tsx  # Sign-up form
│   │   ├── About.tsx       # About page
│   │   ├── Contact.tsx     # Contact page
│   │   └── NotFound.tsx    # 404 page
│   ├── types/              # TypeScript definitions
│   ├── utils/              # Helper functions
│   ├── App.tsx             # Main app + routes
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles
│   └── vite-env.d.ts       # Vite type declarations
├── DESIGN_SYSTEM.md        # Complete design guide
├── LAYOUT_SETUP.md         # Layout documentation
└── README.md               # This file
```

---

## 🧩 Key Components

### MainLayout / Layout Component

**Features:**

✅ **Sticky Navbar**
- Transparent at page top
- Transitions to solid navy (#1B263B) after 50px scroll
- Smooth color transitions (300ms)

✅ **Navigation**
- Desktop: Horizontal links
- Mobile: Hamburger menu
- Links: Product, Solutions, Pricing, Contact
- CTA: "Get Started" button (Mint Green)

✅ **Footer** (4 columns)
1. **Our Sites**: Home, Product, Solutions, Pricing
2. **About Us**: Our Story, Team, Careers, Blog
3. **Resources**: Documentation, API, Support, Privacy
4. **Contact**: Email, Phone, Location + Social Media

✅ **Responsive**
- Mobile-first design
- Touch-friendly interactions
- Optimized for all screen sizes

**Usage:**

```tsx
import { Layout } from './components/Layout';

export const YourPage = () => (
  <Layout 
    seo={{
      title: 'Page Title',
      description: 'Page description',
      keywords: ['keyword1', 'keyword2']
    }}
  >
    {/* Your content */}
  </Layout>
);
```

---

## 📄 Pages

### Marketing Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/product` | Product | Features and benefits |
| `/solutions` | Solutions | Role-specific solutions (CEO, CTO, EM, Dev) |
| `/pricing` | Pricing | Three-tier pricing |
| `/about` | About | Company information |
| `/contact` | Contact | Contact form |

### Conversion Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/get-started` | GetStarted | Sign-up form with team size selector |

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Language** | TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 |
| **Routing** | React Router v6 |
| **Icons** | Lucide React |
| **SEO** | React Helmet Async |
| **Fonts** | Google Fonts (Inter) |

---

## 🔍 SEO Features

- ✅ React Helmet Async for dynamic meta tags
- ✅ Open Graph and Twitter Card meta tags
- ✅ Structured data (JSON-LD) for Organization and WebSite
- ✅ Canonical URLs
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Fast loading optimizations
- ✅ Mobile-friendly
- ✅ Accessibility (WCAG AA)

To customize SEO settings, update `src/utils/seo.ts`.

---

## 🎯 Navbar Behavior

### Desktop
- **Initial State**: Transparent background, navy text/logo
- **Scrolled State** (>50px): Solid navy background, white text/logo
- **Transitions**: Smooth 300ms transitions
- **Links**: Product, Solutions, Pricing, Contact
- **CTA**: "Get Started" (Mint Green, always visible)

### Mobile
- **Menu**: Hamburger icon (Menu/X from Lucide)
- **Animation**: Slide-in menu on toggle
- **Links**: Vertical stack with proper spacing
- **Touch**: 44x44px minimum touch targets

---

## 🦶 Footer Structure

**Background**: Dark Brown (#2C2416)  
**Layout**: 4 columns on desktop, stacked on mobile

**Columns:**
1. **Our Sites**: Main navigation pages
2. **About Us**: Company info links
3. **Resources**: Documentation and support
4. **Contact**: 
   - Email with Mail icon
   - Phone with Phone icon
   - Location with MapPin icon
   - Social media: LinkedIn, Twitter, GitHub

**Styling:**
- Text: Gray-300
- Headings: White
- Hover: Mint Green
- Icons: Lucide React (20px)

---

## 🚦 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Code Quality

```bash
# TypeScript type checking
npx tsc --noEmit

# ESLint
npm run lint

# Prettier formatting
npm run format
```

### Environment

Supports modern browsers with ES2020+.

---

## 📚 Documentation

- **`DESIGN_SYSTEM.md`**: Complete design system guide
  - Colors, typography, spacing
  - Component patterns
  - Animation guidelines
  - Accessibility standards

- **`LAYOUT_SETUP.md`**: Layout component documentation
  - Setup instructions
  - Feature breakdown
  - Configuration options
  - Next steps

---

## 🎨 Customization

### Update Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1B263B',      // Deep Navy
      secondary: '#415A77',    // Slate Blue
      accent: '#00D47E',       // Mint Green
      'dark-brown': '#2C2416', // Footer background
    }
  }
}
```

### Change Font

Edit `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

And `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
}
```

### Replace Logo

Update these files:
- `public/idweo.png` (static asset)
- `src/assets/idweo.png` (imported in components)

Recommended size: 200x200px (PNG with transparency)

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output: `dist/` folder

### Preview Production Build

```bash
npm run preview
```

### Deployment Platforms

Compatible with:
- ✅ Vercel
- ✅ Netlify  
- ✅ AWS S3 + CloudFront
- ✅ GitHub Pages
- ✅ Any static hosting service

### Environment Variables

Create `.env` for environment-specific settings:

```env
VITE_API_URL=https://api.idweo.com
VITE_SITE_URL=https://idweo.com
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 📝 Roadmap

### Completed ✅
- [x] Design system implementation
- [x] Sticky navbar with transitions
- [x] 4-column footer
- [x] Mobile responsive design
- [x] All main pages created
- [x] SEO optimization
- [x] TypeScript setup

### TODO 📋
- [ ] Add actual content to Home page
- [ ] Implement form submission logic (GetStarted, Contact)
- [ ] Add loading states and skeletons
- [ ] Implement error boundaries
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Create blog section
- [ ] Add case studies/testimonials
- [ ] Implement search functionality
- [ ] Add dark mode toggle
- [ ] Backend API integration
- [ ] User authentication flow
- [ ] Dashboard preview/demo

---

## 🤝 Contributing

When contributing:

1. Follow the design system guidelines
2. Maintain TypeScript types
3. Write semantic, accessible HTML
4. Ensure WCAG AA compliance
5. Test on multiple devices/browsers
6. Format code before committing (Prettier)
7. Update documentation as needed

---

## 📧 Support

For questions or issues:
- Email: contact@idweo.com
- Documentation: See `DESIGN_SYSTEM.md` and `LAYOUT_SETUP.md`

---

## 📜 License

Private - All rights reserved

---

**Version**: 0.0.1  
**Last Updated**: January 9, 2026  
**Status**: ✅ Development Ready  
**Built with**: ❤️ by the idweo team
