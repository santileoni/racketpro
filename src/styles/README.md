# CSS Architecture Documentation

This directory contains a well-organized CSS architecture following industry standards for Next.js projects. The structure is designed to be scalable, maintainable, and compatible with Tailwind CSS.

## 📁 Directory Structure

```
src/styles/
├── main.css                    # Main entry point - imports all other CSS files
├── base/                       # Foundation styles
│   ├── variables.css          # CSS custom properties and design tokens
│   ├── reset.css              # Modern CSS reset for cross-browser consistency
│   ├── typography.css         # Typography styles and utilities
│   └── globals.css            # Global application styles
├── layout/                     # Layout and grid systems
│   ├── grid.css               # CSS Grid and Flexbox utilities
│   └── containers.css         # Container layouts and spacing
├── components/                 # Component-specific styles
│   ├── buttons.css            # Button component styles
│   ├── forms.css              # Form controls and validation styles
│   ├── cards.css              # Card component variations
│   └── navigation.css         # Navigation components (navbar, sidebar, etc.)
├── utilities/                  # Utility classes
│   ├── animations.css         # Animation utilities and keyframes
│   ├── spacing.css            # Margin and padding utilities
│   └── responsive.css         # Responsive and display utilities
└── README.md                  # This documentation file
```

## 🚀 Getting Started

### Import in Your Layout

The main CSS file is already imported in your Next.js layout:

```tsx
import "../../styles/main.css";
```

### Using with Tailwind CSS

This CSS architecture is designed to work alongside Tailwind CSS. You can:

1. Use Tailwind classes for rapid development
2. Use custom CSS classes for complex components
3. Combine both approaches as needed

## 🎨 Design Tokens (CSS Variables)

Located in `base/variables.css`, these provide consistent theming:

### Color System

```css
/* Primary colors */
var(--color-primary-500)
var(--color-primary-600)

/* Semantic colors */
var(--color-success)
var(--color-warning)
var(--color-error)

/* Background colors */
var(--bg-primary)
var(--bg-secondary)
```

### Spacing Scale

```css
var(--space-xs)     /* 0.25rem */
var(--space-sm)     /* 0.5rem */
var(--space-md)     /* 1rem */
var(--space-lg)     /* 1.5rem */
var(--space-xl)     /* 2rem */
var(--space-2xl)    /* 3rem */
```

### Typography

```css
var(--text-xs)      /* 0.75rem */
var(--text-sm)      /* 0.875rem */
var(--text-base)    /* 1rem */
var(--text-lg)      /* 1.125rem */
```

## 🧩 Component Usage Examples

### Buttons

```html
<!-- Primary button -->
<button class="btn btn-primary">Click me</button>

<!-- Button sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- Button variants -->
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-danger">Danger</button>
```

### Cards

```html
<!-- Basic card -->
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here.</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>

<!-- Card variations -->
<div class="card card-elevated">...</div>
<div class="card card-outlined">...</div>
<div class="card card-horizontal">...</div>
```

### Forms

```html
<!-- Form group -->
<div class="form-group">
  <label class="form-label required">Email</label>
  <input type="email" class="form-input" placeholder="Enter your email" />
  <div class="form-help">We'll never share your email.</div>
</div>

<!-- Input validation -->
<input class="form-input is-valid" />
<input class="form-input is-invalid" />
<div class="form-feedback invalid-feedback">Error message</div>
```

### Layout

```html
<!-- Container -->
<div class="container">
  <div class="section">Content goes here</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-1">Item 1</div>
  <div class="col-span-2">Item 2</div>
</div>

<!-- Sidebar layout -->
<div class="sidebar-layout">
  <aside class="sidebar">...</aside>
  <main>...</main>
</div>
```

## 🎭 Animations

### CSS Animation Classes

```html
<!-- Fade animations -->
<div class="animate-fade-in">Fades in</div>
<div class="animate-fade-in-up">Fades in from bottom</div>

<!-- Scale animations -->
<div class="animate-scale-in">Scales in</div>

<!-- Hover effects -->
<div class="hover-lift">Lifts on hover</div>
<div class="hover-scale">Scales on hover</div>

<!-- Loading states -->
<div class="loading-dots">
  <span></span>
  <span></span>
  <span></span>
</div>
```

### Custom Animation Duration

```html
<div class="animate-fade-in animate-slow">Slow fade in</div>
<div class="animate-scale-in animate-delay-300">Delayed scale in</div>
```

## 📱 Responsive Design

### Breakpoints

- `sm`: 640px and up
- `md`: 768px and up
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

### Usage Examples

```html
<!-- Responsive display -->
<div class="hidden md:block">Hidden on mobile, visible on tablet+</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Responsive spacing -->
<div class="p-4 md:p-6 lg:p-8">Responsive padding</div>
```

## 🔧 Customization

### Adding New Components

1. Create a new CSS file in the appropriate directory
2. Import it in `main.css`
3. Follow the existing naming conventions

Example:

```css
/* components/alerts.css */
.alert {
  padding: var(--space-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
}

.alert-success {
  background-color: var(--color-success);
  color: white;
}
```

### Modifying Design Tokens

Update variables in `base/variables.css`:

```css
:root {
  /* Custom brand colors */
  --color-brand-primary: #your-color;
  --color-brand-secondary: #your-color;

  /* Custom spacing */
  --space-custom: 2.5rem;
}
```

### Dark Mode Support

Dark mode variables are automatically applied when `prefers-color-scheme: dark`:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #111827;
    --text-primary: #f9fafb;
  }
}
```

## 🎯 Best Practices

### 1. Use Design Tokens

Always use CSS variables for consistent theming:

```css
/* ✅ Good */
color: var(--text-primary);
margin: var(--space-md);

/* ❌ Bad */
color: #111827;
margin: 16px;
```

### 2. Follow BEM-like Naming

```css
/* ✅ Good */
.card {
}
.card-header {
}
.card-body {
}
.card-footer {
}

/* ❌ Bad */
.cardHeader {
}
.card_body {
}
```

### 3. Mobile-First Responsive Design

```css
/* ✅ Good */
.element {
  padding: var(--space-sm);
}

@media (min-width: 768px) {
  .element {
    padding: var(--space-lg);
  }
}
```

### 4. Semantic Class Names

```html
<!-- ✅ Good -->
<button class="btn btn-primary">Submit</button>

<!-- ❌ Bad -->
<button class="blue-button large-text">Submit</button>
```

## 🔍 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties support required
- CSS Grid support required
- Flexbox support required

## 🤝 Contributing

When adding new styles:

1. Follow the existing file structure
2. Use CSS variables for all values
3. Add responsive variations where needed
4. Include hover and focus states
5. Test across different browsers
6. Update this documentation

## 📚 Additional Resources

- [MDN CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
