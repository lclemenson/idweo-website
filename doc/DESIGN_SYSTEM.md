# idweo Design System

## Brand Identity
**idweo** - Engineering Intelligence Platform
*Analyze GitHub/Jira data to track efficiency and growth*

---

## Color Palette

### Primary Colors

#### Deep Navy - `#1B263B`
- **Usage**: Primary brand color, navbar background (when scrolled), headings
- **Tailwind**: `bg-primary`, `text-primary`
- **RGB**: rgb(27, 38, 59)
- **Use Cases**: 
  - Main navigation bar (solid state)
  - Primary text
  - Buttons (secondary actions)
  - Headings

#### Slate Blue - `#415A77`
- **Usage**: Secondary color, subheadings, hover states
- **Tailwind**: `bg-secondary`, `text-secondary`
- **RGB**: rgb(65, 90, 119)
- **Use Cases**:
  - Subheadings
  - Secondary text
  - Hover states on primary elements
  - Supporting content

#### Mint Green - `#00D47E`
- **Usage**: Accent color for CTAs, success states, growth indicators
- **Tailwind**: `bg-accent`, `text-accent`
- **RGB**: rgb(0, 212, 126)
- **Use Cases**:
  - Primary CTA buttons ("Get Started")
  - Success messages
  - Growth/positive indicators
  - Icon accents
  - Link hover states

### Background Colors

#### Dark Chocolate/Charcoal Brown - `#2C2416`
- **Usage**: Footer background
- **Tailwind**: `bg-[#2C2416]`
- **RGB**: rgb(44, 36, 22)
- **Use Cases**:
  - Footer section
  - Dark mode elements (future)

#### White - `#FFFFFF`
- **Usage**: Page backgrounds, text on dark backgrounds
- **Tailwind**: `bg-white`, `text-white`
- **Use Cases**:
  - Main content backgrounds
  - Card backgrounds
  - Text on colored backgrounds

#### Gray Scale
- **Light Gray**: `#F9FAFB` (bg-gray-50)
- **Medium Gray**: `#6B7280` (text-gray-600)
- **Dark Gray**: `#1F2937` (text-gray-800)

---

## Typography

### Font Family
**Primary**: [Inter](https://fonts.google.com/specimen/Inter)
- Loaded from Google Fonts
- Modern, highly legible, optimized for screens
- Alternative: Roboto

### Font Weights
- **Light**: 300 - Rarely used
- **Regular**: 400 - Body text
- **Medium**: 500 - Emphasized text
- **Semibold**: 600 - Headings, important text
- **Bold**: 700 - Major headings
- **Extra Bold**: 800 - Hero text

### Type Scale

#### Headings
```css
h1: text-4xl md:text-5xl font-bold (36px/48px)
h2: text-3xl md:text-4xl font-semibold (30px/36px)
h3: text-2xl font-semibold (24px)
h4: text-xl font-semibold (20px)
h5: text-lg font-semibold (18px)
h6: text-base font-semibold (16px)
```

#### Body Text
```css
Large: text-xl (20px)
Regular: text-base (16px)
Small: text-sm (14px)
Extra Small: text-xs (12px)
```

---

## Spacing System

### Container
- **Max Width**: `container mx-auto` (responsive)
- **Padding**: `px-6` (24px horizontal)
- **Vertical**: `py-12` (48px) for sections

### Component Spacing
```css
xs: 0.5rem (8px)
sm: 0.75rem (12px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
```

---

## Components

### Buttons

#### Primary CTA (Accent)
```css
bg-accent text-white px-6 py-2.5 rounded-lg font-semibold
hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg
```
**Color**: Mint Green (#00D47E)
**Use**: Primary actions (Get Started, Sign Up, Submit)

#### Secondary Button
```css
bg-secondary text-white px-6 py-2.5 rounded-lg font-semibold
hover:bg-opacity-90 transition-all duration-300
```
**Color**: Slate Blue (#415A77)
**Use**: Secondary actions

#### Tertiary/Outline Button
```css
border-2 border-primary text-primary px-6 py-2.5 rounded-lg font-semibold
hover:bg-primary hover:text-white transition-all duration-300
```
**Color**: Deep Navy border (#1B263B)
**Use**: Tertiary actions

### Cards
```css
bg-white border border-gray-200 rounded-lg p-6
hover:shadow-lg transition-shadow duration-300
```

### Input Fields
```css
w-full px-4 py-3 border border-gray-300 rounded-lg
focus:ring-2 focus:ring-accent focus:border-transparent
transition-all duration-200
```

---

## Navigation

### Desktop Navbar
- **Height**: Auto (py-4 = 16px top/bottom)
- **Background**: Transparent → Primary (on scroll)
- **Logo Size**: h-10 (40px)
- **Link Spacing**: space-x-8 (32px)
- **Link Color**: Primary/White (based on scroll state)
- **Hover**: Accent color

### Mobile Menu
- **Trigger**: < 768px (md breakpoint)
- **Icon**: Hamburger (Menu) / Close (X)
- **Layout**: Vertical stack, space-y-4
- **Animation**: Slide/fade in

---

## Footer

### Structure
- **Columns**: 4 on desktop, 1-2 on mobile
- **Background**: Dark Brown (#2C2416)
- **Text Color**: Gray-300 (#D1D5DB)
- **Heading Color**: White
- **Link Hover**: Accent (#00D47E)

### Sections
1. **Our Sites**: Main pages
2. **About Us**: Company info
3. **Resources**: Documentation, support
4. **Contact**: Email, phone, location, social media

---

## Icons

### Library
**Lucide React** - Consistent, modern icon set

### Common Icons
- `Mail` - Email addresses
- `Phone` - Phone numbers
- `MapPin` - Locations
- `Linkedin` - Social media
- `Twitter` - Social media
- `Github` - Social media
- `Menu` - Mobile menu open
- `X` - Mobile menu close
- `Check` - Feature lists, confirmations

### Icon Sizing
```css
Small: w-4 h-4 (16px)
Medium: w-5 h-5 (20px) - Default
Large: w-6 h-6 (24px)
```

---

## Animation & Transitions

### Standard Transition
```css
transition-all duration-300
```

### Hover Effects
```css
hover:shadow-lg
hover:bg-opacity-90
hover:text-accent
```

### Navbar Scroll Transition
```css
transition-all duration-300
```
- Background: transparent → solid
- Text color: primary → white
- Shadow: none → shadow-lg

---

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Primary on White: ✅ High contrast
- White on Primary: ✅ High contrast
- Accent on White: ✅ High contrast

### Interactive Elements
- Minimum touch target: 44x44px
- Focus states: ring-2 ring-accent
- ARIA labels on all interactive elements
- Semantic HTML throughout

---

## Responsive Breakpoints

```css
sm: 640px   - Small devices
md: 768px   - Tablets
lg: 1024px  - Desktops
xl: 1280px  - Large desktops
2xl: 1536px - Extra large screens
```

### Mobile-First Approach
- Design for mobile first
- Progressive enhancement for larger screens
- Hide/show elements: `hidden md:flex`, `md:hidden`

---

## Usage Examples

### Page Header
```tsx
<h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
  Your Heading
</h1>
<p className="text-xl text-secondary mb-8">
  Your subheading or description
</p>
```

### CTA Section
```tsx
<Link
  to="/get-started"
  className="bg-accent text-white px-6 py-2.5 rounded-lg font-semibold 
             hover:bg-opacity-90 transition-all duration-300 shadow-md 
             hover:shadow-lg"
>
  Get Started
</Link>
```

### Feature Card
```tsx
<div className="bg-gray-50 p-6 rounded-lg">
  <h3 className="text-xl font-semibold text-primary mb-3">
    Feature Title
  </h3>
  <p className="text-gray-700">
    Feature description
  </p>
</div>
```

---

## Brand Voice

### Tone
- **Professional** yet approachable
- **Data-driven** and analytical
- **Empowering** for engineering teams
- **Clear** and concise

### Key Messages
- Engineering intelligence
- Data-driven decisions
- Track efficiency and growth
- For CEOs, CTOs, EMs, and Developers

---

## File Locations

- **Colors**: `tailwind.config.js`
- **Global Styles**: `src/index.css`
- **Typography**: Google Fonts in `index.html`
- **Components**: `src/components/`
- **Logo**: `public/idweo.png`, `src/assets/idweo.png`

---

## Resources

- [Inter Font](https://fonts.google.com/specimen/Inter)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [React Router](https://reactrouter.com/)

---

*Last Updated: January 2026*
