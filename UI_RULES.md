# Modern Premium Design System & UI Rules
*Version 3.0 - "Neon Noir" Enhanced Specification*

This document serves as the **absolute source of truth** for the design system, inspired by **HiveArt.xyz (Rexon)** and **DevSync.framer.website**. It is designed to be modular, scalable, and precise. All development must strictly adhere to these specifications.

---

## 1. Design Philosophy (Triết lý thiết kế)

- **Core Vibe:** Modern, Premium, Youthful, Tech-forward, Professional.
- **Key Principle:** "Content is King, Motion is Queen."
- **Aesthetic:** Deep Dark Backgrounds + Neon Mint Accents + High Contrast Typography.
- **Anti-AI:** Avoid generic layouts by using asymmetry, noise textures, and organic motion.

### Key Inspirations
| Source | Key Learnings |
| :--- | :--- |
| **HiveArt.xyz** | Dark theme, Mint accent (#99E5B7), Scroll animations, Skills section design, Typography hierarchy |
| **DevSync.framer** | Custom cursor, Background blur effects, Hover interactions, Click feedback, Glassmorphism navigation |

---

## 2. Color Palette (Bảng màu)

### Primary Dark Theme (Main Preference)
Based on HiveArt.xyz Rexon template color analysis:

| Role | Color | Hex Code | Tailwind Token | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | Rich Black | `#111111` | `bg-[#111111]` | Main page background |
| **Surface** | Dark Gray | `#1A1A1A` | `bg-[#1A1A1A]` | Card backgrounds |
| **Surface Highlight** | Charcoal | `#222222` | `bg-[#222222]` | Input backgrounds, hover states |
| **Primary Accent** | Neon Mint | `#99E5B7` | `text-[#99E5B7]` | Buttons, links, highlights |
| **Primary Accent Alt** | Fresh Green | `#7AF298` | `text-[#7AF298]` | Hover states, secondary accent |
| **Text Primary** | Pure White | `#FFFFFF` | `text-white` | Headings, important text |
| **Text Secondary** | Soft Gray | `#A3A3A3` | `text-[#A3A3A3]` | Body text, descriptions |
| **Text Muted** | Mid Gray | `#666666` | `text-[#666666]` | Captions, labels |
| **Border Subtle** | Dark Border | `#333333` | `border-[#333333]` | Card borders, dividers |
| **Border Hover** | Mint Border | `#99E5B7` | `border-[#99E5B7]` | Hover state borders |

### Accent Colors Variations (From HiveArt)
```css
/* Mint Green Palette */
--accent-lightest: #E7F9EE;  /* Subtle backgrounds */
--accent-light: #BBEECF;     /* Light hover states */
--accent-default: #99E5B7;   /* Primary accent */
--accent-hover: #83AF95;     /* Darker hover */
--accent-dark: #33443A;      /* Deep accent */
--accent-glow: rgba(153, 229, 183, 0.576); /* Glow effects */
```

### Light Mode (High Contrast Alternative)
| Role | Color | Hex Code |
| :--- | :--- | :--- |
| **Background** | Pure White | `#FFFFFF` |
| **Surface** | Light Gray | `#F8F9FA` |
| **Surface Highlight** | Mid Gray | `#E9ECEF` |
| **Text Primary** | Dark Slate | `#0F172A` |
| **Text Secondary** | Darker Gray | `#334155` |
| **Border** | Mid-tone Gray | `#CBD5E1` |

---

## 3. Typography System (Hệ thống Font)

### Font Families (From HiveArt.xyz)
```css
/* Primary Fonts */
--font-heading: 'Outfit', sans-serif;     /* Geometric, Modern - Headings */
--font-body: 'Manrope', sans-serif;       /* Clean, Readable - Body text */
--font-code: 'JetBrains Mono', monospace; /* Technical details */

/* Alternative (From DevSync) */
--font-alt-heading: 'Space Grotesk', sans-serif; /* Bold, Geometric */
--font-alt-body: 'Inter', sans-serif;            /* Modern, Clean */
```

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400;500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Type Scale (Responsive)
| Role | Element | Desktop | Mobile | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `.display-hero` | `150px` | `50px` | `1.0` | 200-600 | `-0.02em` |
| **Display** | `.display` | `140px` | `40px` | `1.0` | 500 | `-0.02em` |
| **H1** | `h1` | `85px` | `32px` | `1.0` | 500 | `-0.02em` |
| **H2** | `h2` | `50px` | `27px` | `1.18` | 500 | `-0.01em` |
| **H3** | `h3` | `30px` | `22px` | `1.18` | 500 | `-0.01em` |
| **H4** | `h4` | `24px` | `20px` | `1.18-1.46` | 600 | `0` |
| **Body Large** | `.body-lg` | `22px` | `18px` | `1.5` | 400 | `0` |
| **Body** | `p` | `18px-20px` | `16px` | `1.88` | 400-500 | `0` |
| **Body Small** | `.body-sm` | `16px` | `14px` | `1.88` | 400 | `0` |
| **Caption** | `small` | `14px` | `12px` | `1.0` | 500 | `0.02em` |
| **Button** | `.btn` | `16px` | `14px` | `1.0` | 600 | `0.02em` |
| **Navigation** | `nav a` | `17px` | `16px` | `1.0` | 600 | `0` |

---

## 4. Spacing & Geometry (Khoảng cách & Hình học)

### Spacing Scale (8px base system from HiveArt)
| Token | Size (px) | Tailwind | Usage |
| :--- | :--- | :--- | :--- |
| `xs` | `6px` | `gap-1.5` | Tight grouping |
| `sm` | `8px` | `gap-2` | Icon + text |
| `md` | `10px` | `gap-2.5` | Small elements |
| `base` | `16px` | `gap-4` | Standard gaps |
| `lg` | `20px` | `gap-5` | Card padding |
| `xl` | `25px` | `gap-6` | Component gaps |
| `2xl` | `30px` | `gap-8` | Section inner gaps |
| `3xl` | `40px` | `gap-10` | Major sections |
| `4xl` | `50px` | `gap-12` | Large sections |
| `5xl` | `70px` | `gap-16` | Section padding |
| `6xl` | `130px` | `gap-32` | Hero sections |

### Border Radius (From HiveArt)
| Token | Size | Tailwind | Usage |
| :--- | :--- | :--- | :--- |
| `none` | `0px` | `rounded-none` | Sharp edges |
| `sm` | `5px` | `rounded` | Tags, small badges |
| `md` | `10px` | `rounded-lg` | Buttons, inputs, nav |
| `lg` | `15px` | `rounded-xl` | Cards, containers |
| `xl` | `20px` | `rounded-2xl` | Large cards |
| `pill` | `140px` | `rounded-[140px]` | Pill shapes |
| `full` | `50%` | `rounded-full` | Avatars, icons |

### Borders (From HiveArt)
```css
/* Standard borders */
--border-subtle: 1px solid rgba(20, 20, 20, 0.1);
--border-dark: 1px solid #212529;
--border-gray: 1px solid #666666;
--border-accent: 1px solid #99E5B7;
--border-glass: 1px solid rgba(255, 255, 255, 0.07);
--border-glass-light: 1px solid rgba(255, 255, 255, 0.1);
```

---

## 5. Motion & Animation System (Hiệu ứng chuyển động)

### Global Timing Functions
```css
/* Standard easing */
--ease-standard: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Ease Out */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);           /* Smooth */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);     /* Bouncy */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);       /* Quick start, slow end */

/* Duration tokens */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

### Scroll Reveal Animations (From HiveArt)
```typescript
// Framer Motion variants for scroll reveal
const scrollRevealVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Staggered children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Fade up animation (most used in HiveArt)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
```

### Skill Bar Animation (From HiveArt)
```typescript
// Animated skill progress bar
const skillBarVariants = {
  hidden: { width: 0 },
  visible: (percentage: number) => ({
    width: `${percentage}%`,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3
    }
  })
};
```

### Background Blur Effects (From DevSync)
```css
/* Glassmorphism navigation */
.glass-nav {
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Blurred background shapes */
.blur-shape {
  position: absolute;
  filter: blur(100px);
  opacity: 0.3;
  pointer-events: none;
}

.blur-shape-mint {
  background: #99E5B7;
}

.blur-shape-gradient {
  background: linear-gradient(135deg, #99E5B7 0%, #7AF298 100%);
}
```

### Multi-layered Shadow Effects (From DevSync)
```css
/* Soft multi-layer shadow */
.shadow-soft {
  box-shadow: 
    rgba(0, 0, 0, 0.11) 0px 0.6px 1.3px -0.94px,
    rgba(0, 0, 0, 0.1) 0px 1.8px 4px -1.88px,
    rgba(0, 0, 0, 0.09) 0px 4.8px 10.5px -2.81px,
    rgba(0, 0, 0, 0.04) 0px 15px 33px -3.75px;
}

/* Accent glow shadow */
.shadow-accent-glow {
  box-shadow: rgba(83, 137, 114, 0.25) 0px 0px 10px 0px;
}

/* Card hover shadow */
.shadow-hover {
  box-shadow: rgba(142, 142, 142, 0.25) 10px 4px 60px 0px;
}
```

---

## 6. Interaction Patterns (Mẫu tương tác)

### 6.1 Custom Cursor (From DevSync)
```typescript
// Custom cursor component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Trailing ring */}
      <motion.div
        className="fixed w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.8 : 1
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </>
  );
};
```

### 6.2 Hover Effects (Combined)

#### Button Hover (From HiveArt)
```css
/* Primary button */
.btn-primary {
  background: #99E5B7;
  color: #000000;
  padding: 13px 20px;
  border-radius: 10px;
  border: 1px solid #99E5B7;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-primary:hover {
  box-shadow: rgba(142, 142, 142, 0.25) 10px 4px 60px 0px;
  transform: translateY(-2px);
}

/* Secondary/Outline button */
.btn-secondary {
  background: transparent;
  color: #ffffff;
  padding: 13px 20px;
  border-radius: 10px;
  border: 1px solid #141414;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #222222;
  border-color: #99E5B7;
}
```

#### Card Hover (Combined patterns)
```css
.card {
  background: #1A1A1A;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 24px;
  padding: 24px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.card:hover {
  transform: translateY(-8px);
  border-color: #99E5B7;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(153, 229, 183, 0.1);
}
```

#### Link Hover (Underline grow effect from DevSync)
```css
.link-underline {
  position: relative;
  color: #ffffff;
  transition: color 0.3s ease;
}

.link-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 1px;
  background: #99E5B7;
  transition: width 0.3s ease;
}

.link-underline:hover {
  color: #99E5B7;
}

.link-underline:hover::after {
  width: 100%;
}
```

### 6.3 Click/Active Effects
```css
/* Active state for buttons */
.btn:active {
  transform: scale(0.95);
}

/* Framer Motion tap effect */
const tapAnimation = {
  whileTap: { scale: 0.98 }
};
```

### 6.4 Spotlight/Flashlight Effect (From HiveArt)
```typescript
// Mouse-following spotlight on cards
const SpotlightCard = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  return (
    <div
      className="relative overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }}
      style={{
        background: `
          radial-gradient(
            600px circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(153, 229, 183, 0.15),
            transparent 40%
          )
        `
      }}
    >
      {children}
    </div>
  );
};
```

---

## 7. Component Specifications (Chi tiết thành phần)

### 7.1 Buttons
| Variant | Height | Padding | Background | Text | Border | Hover |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary** | `48px` | `13px 20px` | `#99E5B7` | `#000000` | `1px solid #99E5B7` | Shadow + Scale |
| **Secondary** | `48px` | `13px 20px` | Transparent | `#FFFFFF` | `1px solid #141414` | Bg `#222` + Border Mint |
| **Small** | `36px` | `8px 16px` | Same as above | Same | Same | Same |
| **Icon Only** | `48px` | `12px` | `#222222` | `#FFFFFF` | None | Bg Mint + Text Black |

### 7.2 Cards
```css
.card {
  padding: 24px;              /* Desktop: 24px, Mobile: 20px */
  background: #1A1A1A;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 24px;
  transition: all 0.4s ease;
}

.card:hover {
  transform: translateY(-8px);
  border-color: #99E5B7;
}
```

### 7.3 Inputs
```css
.input {
  height: 48px;
  padding: 0 16px;
  border-radius: 10px;
  background: #222222;
  border: 1px solid transparent;
  color: #ffffff;
  transition: border-color 0.3s ease;
}

.input::placeholder {
  color: #666666;
}

.input:focus {
  border-color: #99E5B7;
  outline: none;
}
```

### 7.4 Navigation (Glassmorphism from DevSync)
```css
.navbar {
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  padding: 12px 24px;
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  z-index: 100;
}
```

### 7.5 Skills Section (From HiveArt)
```typescript
// Skill bar component
const SkillBar = ({ name, percentage, icon }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUpVariants}
    className="mb-6"
  >
    <div className="flex justify-between mb-2">
      <div className="flex items-center gap-2">
        {icon && <span className="text-[#99E5B7]">{icon}</span>}
        <span className="font-manrope font-medium text-white">{name}</span>
      </div>
      <span className="font-outfit font-semibold text-[#99E5B7]">{percentage}%</span>
    </div>
    <div className="h-2 bg-[#222222] rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-[#99E5B7] to-[#7AF298] rounded-full"
        variants={skillBarVariants}
        custom={percentage}
      />
    </div>
  </motion.div>
);
```

---

## 8. Layout & Breakpoints (Bố cục)

### Breakpoints
| Name | Min Width | Max Width | Usage |
| :--- | :--- | :--- | :--- |
| **Mobile** | `0px` | `639px` | Single column |
| **Tablet** | `640px` | `1023px` | 2-3 columns |
| **Desktop** | `1024px` | `1279px` | Full layout |
| **Wide** | `1280px` | - | Extra spacing |

### Container
```css
.container {
  max-width: 1280px;      /* max-w-7xl */
  margin: 0 auto;
  padding: 0 16px;        /* Mobile: 16px */
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;      /* Tablet+: 32px */
  }
}
```

### Grid System
- **Desktop:** 12 Columns, Gap `32px`
- **Tablet:** 6 Columns, Gap `24px`
- **Mobile:** 4 Columns, Gap `16px`

---

## 9. Background Design Patterns (Từ HiveArt & DevSync)

### Dark Theme Background
```css
/* Base dark background */
body {
  background-color: #111111;
  background-image: 
    radial-gradient(ellipse at 20% 0%, rgba(153, 229, 183, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 100%, rgba(153, 229, 183, 0.03) 0%, transparent 50%);
}
```

### Floating Blur Shapes (From DevSync)
```css
/* Decorative blur shapes */
.bg-blur-shape {
  position: fixed;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  pointer-events: none;
  z-index: -1;
}

.bg-blur-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -200px;
  background: #99E5B7;
}

.bg-blur-2 {
  width: 400px;
  height: 400px;
  bottom: 20%;
  left: -100px;
  background: #7AF298;
}
```

### Noise Texture Overlay
```css
/* Anti-AI aesthetic */
.noise-overlay {
  background-image: url('/noise.png');
  background-repeat: repeat;
  opacity: 0.03;
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
}
```

---

## 10. Tailwind Config Reference

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#111111',
        surface: {
          DEFAULT: '#1A1A1A',
          highlight: '#222222',
        },
        primary: {
          DEFAULT: '#99E5B7',
          light: '#BBEECF',
          dark: '#83AF95',
          foreground: '#000000',
        },
        accent: {
          DEFAULT: '#7AF298',
          glow: 'rgba(153, 229, 183, 0.576)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
          muted: '#666666',
        },
        border: {
          DEFAULT: '#333333',
          subtle: 'rgba(20, 20, 20, 0.1)',
          glass: 'rgba(255, 255, 255, 0.07)',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '13': '3.25rem', // 52px
        '15': '3.75rem', // 60px
        '18': '4.5rem',  // 72px
      },
      borderRadius: {
        'pill': '140px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'skill-fill': 'skillFill 1.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        skillFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--skill-percentage)' },
        },
      },
    },
  },
};
```

---

## 11. Pre-Delivery Checklist

### Visual Quality
- [ ] Dark theme properly implemented (`#111111` base)
- [ ] Mint accent (`#99E5B7`) used consistently
- [ ] Background blur shapes added for depth
- [ ] Typography follows Outfit/Manrope system
- [ ] No emojis as icons (use Lucide/Heroicons)

### Interaction
- [ ] Custom cursor implemented (optional but recommended)
- [ ] Hover states with color/transform transitions
- [ ] Underline grow effect on links
- [ ] Button hover shadows and transforms
- [ ] `cursor-pointer` on all clickable elements

### Animation
- [ ] Scroll reveal animations (fade-up, stagger)
- [ ] Skill bars animate on viewport entry
- [ ] Spotlight effect on cards (optional)
- [ ] Smooth page transitions
- [ ] `prefers-reduced-motion` respected

### Layout
- [ ] Glassmorphism navigation (floating, blur)
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] Content padding respects fixed elements
- [ ] Consistent max-width containers

---

## 12. Style Keywords Reference

- **Core:** Dark Mode, Neon Noir, Retro-Futurism
- **Supporting:** Aurora UI, Glassmorphism, Spotlight Effect
- **Colors:** Neon Mint, Rich Black, High Contrast
- **Motion:** Smooth Reveal, Staggered Entry, Spring Animation
- **Avoid:** Neumorphism, Claymorphism, Brutalism
