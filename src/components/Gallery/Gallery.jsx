import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

// Placeholder gallery images (replace with actual clan images)
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1533837382332-15a3d48c4138?w=800',
    title: 'Castle Fortress',
    category: 'Strongholds'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800',
    title: 'Battle Formation',
    category: 'Battles'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1565000852-a63c066a6c7b?w=800',
    title: 'Ancient Hall',
    category: 'Heritage'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800',
    title: 'War Banner',
    category: 'Artifacts'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1551414743-7a5f0e9e1f3c?w=800',
    title: 'Great Council',
    category: 'Events'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=800',
    title: 'Knight\'s Armor',
    category: 'Artifacts'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1578590715892-38e33cb1eedd?w=800',
    title: 'Mountain Outpost',
    category: 'Strongholds'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=800',
    title: 'Victory Celebration',
    category: 'Events'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1604869515882-4d10fa4b0492?w=800',
    title: 'Sacred Scroll',
    category: 'Heritage'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef();
  const imagesRef = useRef([]);
  const categories = ['All', 'Strongholds', 'Battles', 'Heritage', 'Artifacts', 'Events'];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, index) => {
        if (img) {
          gsap.from(img, {
            scrollTrigger: {
              trigger: img,
              start: 'top 90%',
              end: 'top 70%',
              scrub: 1,
            },
            y: 60,
            opacity: 0,
            scale: 0.8,
          });
        }
      });
    });
    
    return () => ctx.revert();
  }, [filter]);
  
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  const openLightbox = (image) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="gallery-container">
        <h2 className="section-title">
          <span className="title-accent">━━━</span>
          Chronicles Gallery
          <span className="title-accent">━━━</span>
        </h2>
        
        <p className="gallery-intro">
          Witness the legacy of the Belmonts through ages of glory
        </p>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              ref={el => imagesRef.current[index] = el}
              onClick={() => openLightbox(image)}
            >
              <div className="image-wrapper">
                <img src={image.src} alt={image.title} />
                <div className="image-overlay">
                  <h3 className="image-title">{image.title}</h3>
                  <span className="image-category">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <span>{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
