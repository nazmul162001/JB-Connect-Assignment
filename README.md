# JB Connect - Corporate Website

A modern, responsive corporate website built with HTML, CSS, and JavaScript. Designed with Japanese aesthetics and professional business presentation in mind.

## 🌐 Live Demo

**[View Live Site →](https://jb-connect-assignment.vercel.app/)**

---

## 📋 Overview

JB Connect is a fully responsive corporate website designed to showcase a company's vision, services, history, and profile. The site features smooth animations, an intuitive navigation system, and a clean, modern design that adapts seamlessly to both desktop and mobile devices.

---

## ✨ Features

### Design & UX

- **Responsive Design** - Fully optimized for desktop (PC) and mobile devices with 768px breakpoint
- **Smooth Scroll Navigation** - Click-to-scroll functionality for all navigation links
- **Scroll Animations** - Elements animate into view as users scroll down the page
- **Professional Typography** - Uses Google Fonts (Noto Sans JP, Pinyon Script, Oswald) for elegant text presentation

### Mobile Experience

- **Hamburger Menu** - Collapsible navigation with smooth slide-down animation
- **Touch-Friendly** - Optimized touch targets and interactions for mobile users
- **Full-Screen Hero** - Hero image fills viewport on mobile for impactful first impression
- **Auto-Close Menu** - Mobile menu automatically closes when switching to desktop view

---

## 🛠 Technologies Used

| Technology   | Purpose                                          |
| ------------ | ------------------------------------------------ |
| HTML5        | Semantic structure and content                   |
| CSS3         | Styling, animations, responsive design           |
| JavaScript   | Interactive features and animations              |
| Google Fonts | Typography (Noto Sans JP, Pinyon Script, Oswald) |
| Vercel       | Deployment and hosting                           |

---

## 📁 File Structure

```
JB Connect/
├── index.html              # Main HTML file
├── README.md               # Project documentation
├── css/
│   └── style.css           # All styles and responsive rules
├── js/
│   └── main.js             # JavaScript functionality
├── assets/
│   └── images/
│       ├── mainImg.jpg     # Hero section background
│       ├── sec02_01.jpg    # Message section image 1
│       ├── sec02_02.jpg    # Message section image 2
│       ├── circleImg01.png # Service icon 1
│       ├── circleImg02.png # Service icon 2
│       ├── circleImg03.png # Service icon 3
│       ├── reason.jpg      # Reason section image
│       └── bgSec04.jpg     # Story section background
└── texts/
    ├── TOP.rtf             # Hero section text
    ├── VISION.rtf          # Vision section text
    ├── MESSAGE1.rtf        # Message section 1 text
    ├── MESSAGE 2.rtf       # Message section 2 text
    ├── SERVICE.rtf         # Service section text
    ├── STORY1.rtf          # Story section text
    ├── SUCCESS.rtf         # Success section text
    ├── REASON.rtf          # Reason section text
    └── CompanyInfo.rtf     # Company profile text
```

---

## 📖 Website Sections

### 1. Header & Navigation

- Fixed navigation bar with transparent background
- Smooth scroll to sections on click
- Responsive hamburger menu for mobile devices

### 2. Hero Section (`#top`)

- Full-width hero image with overlay
- Elegant script typography for main heading "Vestibulum mauris"
- Subtitle: "最新技術と自然との調和を目指す"

### 3. Vision Section (`#vision`)

- Company vision statement
- Centered text layout with clean typography

### 4. Message Sections (`#message`)

Two alternating layout sections:

- **Section 1**: Content (left) + Image (right)
- **Section 2**: Image (left) + Content (right)
- Gray background for content areas
- Full-bleed images

### 5. Service Section (`#service`)

Three service cards featuring:

- **SERVICE** - Main services offered
- **MESSAGE** - Company messaging
- **STORY** - Company narrative

Each card includes:

- Circular image icon
- Service title
- Description text

### 6. Reason Section (`#reason`)

- Numbered section indicator (01)
- "REASON" label
- Company history: "歴史と実績"
- Side-by-side image and text layout

### 7. Story Section (`#story`)

- Full-width background image with overlay
- Two content blocks:
  - **STORY** - Company story
  - **SUCCESS** - Success narrative
- Elegant typography with decorative underlines

### 8. Profile Section (`#profile`)

Company information table including:

- Company name (名称)
- CEO (代表取締役)
- Address (住所)
- Phone (電話番号)
- Established date (設立)
- Capital (資本金)
- Business partners (主な取引先)
- Embedded Google Maps location

### 9. Footer

- Copyright notice
- Design credit

---

## 📱 Responsive Breakpoints

| Viewport | Breakpoint | Layout                                            |
| -------- | ---------- | ------------------------------------------------- |
| Desktop  | > 768px    | Full navigation, side-by-side layouts             |
| Mobile   | ≤ 768px    | Hamburger menu, stacked layouts, full-screen hero |

### Mobile-Specific Features

- Hamburger menu with slide-down animation
- Full-viewport hero image
- Stacked message sections (image → content order)
- Centered section headings
- Touch-optimized navigation

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for best experience)

### Installation

1. **Clone or download** the project files

2. **Open locally**

   ```bash
   # Option 1: Direct open
   open index.html

   # Option 2: Use a local server (recommended)
   npx serve .
   # or
   python -m http.server 8000
   ```

3. **View in browser**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or open `index.html` directly in your browser

---

## 🎨 Color Palette

| Variable             | Color     | Usage                       |
| -------------------- | --------- | --------------------------- |
| `--color-primary`    | `#2c3e50` | Primary brand color         |
| `--color-secondary`  | `#8b7355` | Accent color, borders       |
| `--color-text`       | `#333333` | Body text                   |
| `--color-text-light` | `#666666` | Secondary text              |
| `--color-white`      | `#ffffff` | Backgrounds, light elements |
| `--color-bg`         | `#f5f5f5` | Section backgrounds         |
| `--color-bg-dark`    | `#e8e8e8` | Darker backgrounds          |

---

**[🔗 View Live Site](https://jb-connect-assignment.vercel.app/)**
