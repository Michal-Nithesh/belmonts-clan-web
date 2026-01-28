# 🏰 The Belmonts - Medieval Clan Website

A high-end, cinematic medieval-themed clan website built with React.js and Three.js. Experience an immersive journey through an ancient kingdom with stunning visuals, smooth animations, and a royal aesthetic.

![Medieval Theme](https://img.shields.io/badge/Theme-Medieval-8b7355)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![Three.js](https://img.shields.io/badge/Three.js-Latest-000000)
![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02)

## ✨ Features

### 🎨 Visual Design
- **Medieval Fantasy Aesthetic** inspired by castles, banners, and ancient kingdoms
- **Authentic Color Palette**: Warm parchment beige, dark brown, muted gold, stone grey
- **Custom Medieval Fonts**: Cinzel for titles, Crimson Text for body
- **Aged, Royal Look**: No bright modern colors, everything feels calm and historic

### 🏰 Hero Section (Three.js)
- Fullscreen 3D scene with medieval castle silhouette
- Animated fog and cloud particles with slow movement
- Waving flag/banner using vertex shader animation
- Parallax camera movement on mouse interaction
- Scroll-triggered text reveals with GSAP
- Elegant "Enter the Kingdom" CTA button

### 📜 Website Sections

#### About the Kingdom
- Story-driven narrative about the Belmonts clan
- Scroll-triggered text animations
- Parchment texture background with aged appearance
- Beautiful typography with ornamental decorations

#### Clan Members
- Grid of member cards styled like medieval scrolls
- 3D flip card effects on hover
- Role badges (Leader, Knight, Strategist, Rogue, etc.)
- Glow and emboss effects
- Character icons and titles

#### Chronicles Gallery
- Masonry-style image gallery
- Category filtering system
- Lightbox modal with cinematic transitions
- Hover effects with depth and parallax
- Medieval border styling

#### Timeline of Achievements
- Vertical timeline styled as ancient chronicles
- Animated milestones appearing on scroll
- Historical events from founding to present
- Alternating left/right layout
- Decorative markers and ornaments

#### Join the Clan (Contact)
- Medieval-styled form with authentic aesthetics
- Role selection dropdown
- Wax seal button with rotation animation
- Glowing hover effects
- Contact information cards

#### Footer
- Comprehensive clan information
- Quick navigation links
- Social media connections
- Medieval ornamental dividers

### ⚙️ Technical Features

#### Animations & Interactions
- **GSAP + ScrollTrigger** for smooth scroll-based animations
- **Lenis** for buttery smooth scrolling experience
- Section reveals with stagger effects
- Text and element transitions
- Parallax camera movements

#### Performance
- Optimized Three.js rendering
- Efficient component structure
- Lazy loading ready
- Mobile-responsive design

#### Code Structure
- Clean React functional components
- Reusable custom hooks
- Modular CSS with scoped styles
- Organized component hierarchy

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd belmonts-clan-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
belmonts-clan-web/
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Members/
│   │   │   ├── Members.jsx
│   │   │   └── Members.css
│   │   ├── Gallery/
│   │   │   ├── Gallery.jsx
│   │   │   └── Gallery.css
│   │   ├── Timeline/
│   │   │   ├── Timeline.jsx
│   │   │   └── Timeline.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── hooks/
│   │   ├── useSmoothScroll.js
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
└── README.md
```

## 🎨 Color Palette

```css
--parchment-light: #d4c5b0;  /* Light parchment backgrounds */
--parchment-dark: #c9b9a1;   /* Darker parchment accents */
--brown-dark: #1a1410;        /* Main dark background */
--brown-medium: #2d2419;      /* Secondary background */
--gold-muted: #8b7355;        /* Borders and ornaments */
--gold-bright: #d4a574;       /* Highlights and glows */
--stone-grey: #6b5945;        /* Subtle UI elements */
```

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **Three.js** - 3D graphics and WebGL
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **GSAP** - Professional animation library
- **ScrollTrigger** - Scroll-based animation plugin
- **Lenis** - Smooth scrolling library
- **Vite** - Fast build tool and dev server

## 📝 Customization

### Adding Clan Members
Edit `src/components/Members/Members.jsx`:
```javascript
const clanMembers = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Role',
    title: 'Your Title',
    description: 'Your description',
    icon: '⚔'
  },
  // Add more members...
];
```

### Modifying Timeline Events
Edit `src/components/Timeline/Timeline.jsx`:
```javascript
const achievements = [
  {
    id: 1,
    year: '1147',
    title: 'Your Event',
    description: 'Event description',
    icon: '🏰'
  },
  // Add more events...
];
```

### Changing Gallery Images
Edit `src/components/Gallery/Gallery.jsx`:
```javascript
const galleryImages = [
  {
    id: 1,
    src: 'your-image-url',
    title: 'Image Title',
    category: 'Category'
  },
  // Add more images...
];
```

## 🎯 Future Enhancements

- [ ] Add sound effects and ambient music
- [ ] Implement member authentication system
- [ ] Create admin panel for content management
- [ ] Add real-time chat functionality
- [ ] Integrate with Discord API
- [ ] Add more interactive Three.js elements
- [ ] Create mobile app version
- [ ] Add multiplayer game integrations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🏆 Credits

**Design & Development**: Senior Front-End Engineer & Creative Developer  
**Clan**: The Belmonts  
**Established**: 1147  
**Motto**: *"Forged in Honor • Bound by Legacy"*

---

<div align="center">

**⚔ For Honor. For Glory. For the Belmonts. ⚔**

*May our banners fly eternal across the digital realm*

</div>
