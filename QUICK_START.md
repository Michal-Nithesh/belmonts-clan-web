# 🏰 Belmonts Clan Website - Quick Start Guide

## 🎯 What You Have

A fully functional, premium medieval-themed clan website with:

### ✅ Completed Features

1. **Hero Section** - Three.js 3D scene with:
   - Animated medieval castle
   - Waving clan banner/flag
   - Fog and particle effects
   - Parallax mouse movement
   - Cinematic text reveal

2. **About Section** - Kingdom story with:
   - Scroll-triggered animations
   - Parchment aesthetic
   - Medieval typography
   - Ornamental decorations

3. **Members Section** - 8 clan members with:
   - 3D flip card effects
   - Role badges
   - Hover glow effects
   - Character descriptions

4. **Gallery Section** - Image showcase with:
   - Category filtering
   - Lightbox modal
   - Hover effects
   - Medieval borders

5. **Timeline Section** - Historical achievements:
   - 8 milestone events
   - Alternating layout
   - Scroll animations
   - Decorative markers

6. **Contact Section** - Join form with:
   - Medieval styling
   - Role selection
   - Wax seal button
   - Contact info cards

7. **Footer** - Complete with:
   - Clan information
   - Quick links
   - Social media
   - Copyright info

## 🚀 Running the Website

The dev server is already running at: **http://localhost:5173**

### Commands:
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎨 Customization Guide

### Change Clan Name
Search and replace "Belmonts" throughout the codebase with your clan name.

### Update Colors
Edit `src/index.css` CSS variables:
```css
--parchment-light: #d4c5b0;
--gold-bright: #d4a574;
--brown-dark: #1a1410;
```

### Add Members
File: `src/components/Members/Members.jsx`
```javascript
{
  id: 9,
  name: 'New Member',
  role: 'Role',
  title: 'The Title',
  description: 'Description text',
  icon: '⚔'
}
```

### Update Timeline
File: `src/components/Timeline/Timeline.jsx`
```javascript
{
  id: 9,
  year: '2026',
  title: 'New Achievement',
  description: 'What happened',
  icon: '🏆'
}
```

### Change Gallery Images
File: `src/components/Gallery/Gallery.jsx`

Replace the image URLs with your own:
```javascript
{
  id: 1,
  src: 'your-image-url.jpg',
  title: 'Image Name',
  category: 'Category'
}
```

### Modify Clan Story
File: `src/components/About/About.jsx`

Edit the paragraphs with your clan's history and lore.

### Update Contact Info
File: `src/components/Contact/Contact.jsx`

Change the info cards with your actual contact details.

## 🎭 Animation Configuration

All scroll animations use GSAP + ScrollTrigger.

### To adjust animation speed:
Look for `scrollTrigger` configs:
```javascript
scrollTrigger: {
  trigger: element,
  start: 'top 80%',    // When animation starts
  end: 'top 50%',      // When animation ends
  scrub: 1,            // Smooth scrubbing (0-5)
}
```

### To change smooth scroll:
Edit `src/hooks/useSmoothScroll.js`:
```javascript
const lenis = new Lenis({
  duration: 1.2,  // Scroll duration (increase for slower)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

## 📱 Making it Mobile-Friendly

All components are already responsive! Media queries at:
- 768px for tablets
- 968px for small laptops

Test by resizing your browser window.

## 🎨 Typography

Two Google Fonts are used:
- **Cinzel** - For titles and headings (royal, medieval)
- **Crimson Text** - For body text (readable serif)

## 🔧 Common Modifications

### Change Hero Motto
File: `src/components/Hero/Hero.jsx`
```javascript
<p className="hero-motto">
  <span className="motto-text">Your Motto Here</span>
</p>
```

### Adjust Castle Position
File: `src/components/Hero/Hero.jsx`
```javascript
<group ref={castleRef} position={[x, y, z]}>
```

### Change Button Text
File: `src/components/Hero/Hero.jsx`
```javascript
<span className="cta-text">Your Button Text</span>
```

### Modify Form Fields
File: `src/components/Contact/Contact.jsx`

Add/remove form inputs as needed.

## 🚀 Deployment

### Build for Production:
```bash
npm run build
```

This creates a `dist` folder ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

### Deploy to Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 💡 Tips & Tricks

1. **Performance**: Keep Three.js scenes simple for better performance
2. **Images**: Optimize gallery images before adding them
3. **Testing**: Test on different browsers and devices
4. **SEO**: Add meta tags in `index.html` for better SEO
5. **Analytics**: Add Google Analytics in `index.html`

## 🐛 Troubleshooting

### White Screen?
- Check browser console for errors
- Ensure all dependencies installed: `npm install`
- Clear browser cache

### Animations Not Working?
- Check GSAP ScrollTrigger is imported
- Verify scroll position triggers
- Test in different browser

### Three.js Scene Black?
- Check lighting in Hero component
- Verify camera position
- Test with simpler geometry first

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [GSAP Documentation](https://gsap.com/docs)
- [Vite Documentation](https://vite.dev)

## 🎯 Next Steps

1. ✅ Website is built and running
2. 🔄 Customize content with your clan info
3. 📸 Add your own images to gallery
4. 🎨 Adjust colors if needed
5. 🚀 Deploy to production
6. 📱 Test on mobile devices
7. 🔗 Share with your clan!

---

**Need help?** Check README_BELMONTS.md for full documentation.

**⚔ For the Belmonts! ⚔**
