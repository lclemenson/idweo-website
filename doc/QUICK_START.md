# idweo Website - Quick Start Guide

This guide will help you get started with the idweo website quickly.

## 🚀 Get Running in 60 Seconds

```bash
# 1. Navigate to the site-web directory
cd site-web

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser
# The terminal will show: http://localhost:5174/ (or similar)
```

That's it! Your site is now running.

---

## 🎨 Creating a New Page

### Step 1: Create the Page Component

Create a new file in `src/pages/YourPage.tsx`:

```tsx
import { Layout } from '../components/Layout';

export const YourPage = () => {
  return (
    <Layout
      seo={{
        title: 'Your Page Title - idweo',
        description: 'A brief description of your page',
        keywords: ['keyword1', 'keyword2', 'keyword3'],
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Your Page Heading
        </h1>
        <p className="text-xl text-secondary mb-8">
          Your page content goes here
        </p>
      </div>
    </Layout>
  );
};
```

### Step 2: Add the Route

Update `src/App.tsx`:

```tsx
import { YourPage } from './pages/YourPage';

// In the Routes section:
<Route path="/your-page" element={<YourPage />} />
```

### Step 3: Add Navigation Link (Optional)

Update `src/components/Layout.tsx` if you want it in the navbar.

Done! Visit `http://localhost:5174/your-page`

---

## 🎨 Common UI Patterns

### Hero Section

```tsx
<div className="bg-primary text-white py-20">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Welcome to idweo
    </h1>
    <p className="text-xl md:text-2xl mb-8 text-gray-300">
      Engineering Intelligence Platform
    </p>
    <Link
      to="/get-started"
      className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
    >
      Get Started Free
    </Link>
  </div>
</div>
```

### Feature Grid (2 columns)

```tsx
<div className="container mx-auto px-6 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Feature One
      </h3>
      <p className="text-gray-700">
        Description of your feature
      </p>
    </div>
    
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-primary mb-3">
        Feature Two
      </h3>
      <p className="text-gray-700">
        Description of your feature
      </p>
    </div>
  </div>
</div>
```

### CTA Button (Primary)

```tsx
<Link
  to="/get-started"
  className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
>
  Get Started
</Link>
```

### CTA Button (Secondary)

```tsx
<Link
  to="/contact"
  className="bg-secondary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
>
  Contact Us
</Link>
```

### Section with Icon

```tsx
import { Zap } from 'lucide-react';

<div className="flex items-start space-x-4">
  <Zap className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
  <div>
    <h3 className="text-xl font-semibold text-primary mb-2">
      Fast Performance
    </h3>
    <p className="text-gray-700">
      Lightning-fast insights from your data
    </p>
  </div>
</div>
```

---

## 🎨 Using Colors

### In Classes

```tsx
// Backgrounds
<div className="bg-primary">Primary Navy</div>
<div className="bg-secondary">Slate Blue</div>
<div className="bg-accent">Mint Green</div>
<div className="bg-[#2C2416]">Dark Brown</div>

// Text Colors
<p className="text-primary">Primary Navy text</p>
<p className="text-secondary">Slate Blue text</p>
<p className="text-accent">Mint Green text</p>

// Border Colors
<div className="border-2 border-accent">Mint border</div>
```

### Hover States

```tsx
<button className="bg-accent hover:bg-opacity-90 transition-all duration-300">
  Hover Me
</button>

<Link className="text-primary hover:text-accent transition-colors duration-200">
  Hover Link
</Link>
```

---

## 🎨 Typography Scale

```tsx
// Headings
<h1 className="text-4xl md:text-5xl font-bold text-primary">
  Main Heading
</h1>

<h2 className="text-3xl md:text-4xl font-semibold text-primary">
  Section Heading
</h2>

<h3 className="text-2xl font-semibold text-primary">
  Subsection Heading
</h3>

// Body Text
<p className="text-xl text-secondary">
  Large body text
</p>

<p className="text-base text-gray-700">
  Regular body text
</p>

<p className="text-sm text-gray-600">
  Small text
</p>
```

---

## 🎨 Spacing

```tsx
// Container with standard padding
<div className="container mx-auto px-6 py-12">
  Content
</div>

// Spacing between elements
<div className="space-y-6">
  <p>Item 1</p>
  <p>Item 2</p>
  <p>Item 3</p>
</div>

// Margin utilities
<div className="mb-6">Bottom margin</div>
<div className="mt-8">Top margin</div>
<div className="mx-auto">Center horizontally</div>
```

---

## 📱 Responsive Design

### Hide/Show Based on Screen Size

```tsx
// Hidden on mobile, visible on desktop
<div className="hidden md:block">Desktop Only</div>

// Visible on mobile, hidden on desktop
<div className="md:hidden">Mobile Only</div>

// Different layouts for mobile/desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
</div>
```

### Responsive Text

```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>

<p className="text-base md:text-lg lg:text-xl">
  Responsive body text
</p>
```

---

## 🔍 SEO Best Practices

### Page SEO

```tsx
<Layout
  seo={{
    title: 'Page Title - idweo',
    description: 'Clear, concise description (150-160 chars)',
    keywords: ['relevant', 'keywords', 'here'],
    image: 'https://idweo.com/og-image.png', // Optional
    type: 'website', // or 'article', 'product', 'profile'
  }}
>
  {/* Page content */}
</Layout>
```

### Semantic HTML

```tsx
// Good: Semantic structure
<article>
  <header>
    <h1>Article Title</h1>
  </header>
  <section>
    <p>Content</p>
  </section>
</article>

// Avoid: Generic divs everywhere
<div>
  <div>
    <div>Title</div>
  </div>
</div>
```

---

## 🎯 Common Icons (Lucide React)

```tsx
import { 
  Check,      // Checkmarks
  X,          // Close/cancel
  Mail,       // Email
  Phone,      // Phone
  MapPin,     // Location
  Linkedin,   // LinkedIn
  Twitter,    // Twitter
  Github,     // GitHub
  Menu,       // Hamburger menu
  ArrowRight, // Right arrow
  ChevronDown,// Dropdown
  Star,       // Rating/favorite
  Users,      // Team/people
  Zap,        // Speed/power
  TrendingUp, // Growth
  BarChart3,  // Analytics
} from 'lucide-react';

// Usage
<Check className="w-5 h-5 text-accent" />
```

### Icon Sizes

```tsx
<Icon className="w-4 h-4" /> {/* 16px - Small */}
<Icon className="w-5 h-5" /> {/* 20px - Default */}
<Icon className="w-6 h-6" /> {/* 24px - Large */}
<Icon className="w-8 h-8" /> {/* 32px - Extra Large */}
```

---

## 🔧 Common Tasks

### Update Logo

1. Replace `public/idweo.png` with your logo
2. Replace `src/assets/idweo.png` with your logo
3. Recommended: 200x200px PNG with transparency

### Change Contact Info

Edit `src/components/Layout.tsx`, find the Footer section, and update:
- Email address
- Phone number
- Location
- Social media links

### Add a Footer Column

Edit `src/components/Layout.tsx`, add a new column div in the footer grid.

### Modify Navbar Links

Edit `src/components/Layout.tsx`, find the navigation section, and add/remove `<Link>` components.

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Vite will automatically try the next port
# Or kill the process using port 5173:
lsof -ti:5173 | xargs kill -9
```

### TypeScript Errors

```bash
# Run type checking
npx tsc --noEmit

# Often fixed by restarting the dev server
```

### Styling Not Applied

1. Make sure Tailwind classes are spelled correctly
2. Check `tailwind.config.js` includes your file paths
3. Restart dev server

### Import Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

1. **Customize Content**: Update Home, About, and Contact pages
2. **Add Your Brand**: Replace logo and update colors
3. **Connect Backend**: Implement form submission logic
4. **Add Analytics**: Integrate Google Analytics or similar
5. **Deploy**: Choose a hosting platform (Vercel, Netlify, etc.)

---

## 📖 Additional Resources

- **Design System**: `DESIGN_SYSTEM.md` - Complete design guidelines
- **Layout Docs**: `LAYOUT_SETUP.md` - Detailed layout documentation
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Lucide Icons**: https://lucide.dev/
- **React Router**: https://reactrouter.com/

---

## 💡 Pro Tips

1. **Use the Design System**: Stick to defined colors and spacing
2. **Mobile First**: Design for mobile, then scale up
3. **Accessibility**: Use semantic HTML and ARIA labels
4. **Performance**: Optimize images, lazy load when possible
5. **SEO**: Write descriptive meta tags for every page
6. **Consistency**: Reuse components and patterns

---

**Happy Building! 🚀**

If you need help, check the documentation or reach out to the team.
