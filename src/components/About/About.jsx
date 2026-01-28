import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef();
  const titleRef = useRef();
  const paragraphsRef = useRef([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with parchment unroll
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
        scale: 0.9,
        rotateX: -15,
      });
      
      // Paragraph animations with stagger and slide reveal
      paragraphsRef.current.forEach((para, index) => {
        gsap.from(para, {
          scrollTrigger: {
            trigger: para,
            start: 'top 88%',
            end: 'top 65%',
            scrub: 1.2,
          },
          x: index % 2 === 0 ? -60 : 60,
          y: 30,
          opacity: 0,
          rotateY: index % 2 === 0 ? -5 : 5,
        });
      });
      
      // Container entrance with scale and fade
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        },
        opacity: 0,
        scale: 0.95,
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-ornament top-ornament">✦</div>
        
        <h2 className="section-title" ref={titleRef}>
          <span className="title-accent">━━━</span>
          The Kingdom
          <span className="title-accent">━━━</span>
        </h2>
        
        <div className="about-content">
          <p 
            className="about-text intro-text"
            ref={el => paragraphsRef.current[0] = el}
          >
            In the ancient lands where shadows dance with flame, 
            the <strong>Belmonts</strong> rose from the ashes of forgotten kingdoms. 
            Forged in the crucible of legendary battles, bound by sacred oaths 
            that transcend mortal understanding.
          </p>
          
          <div className="story-divider">
            <span className="divider-symbol">⚔</span>
          </div>
          
          <p 
            className="about-text"
            ref={el => paragraphsRef.current[1] = el}
          >
            Through centuries of conquest and alliance, our banners have flown 
            across countless battlefields. We are strategists and warriors, 
            scholars and rogues, united by an unbreakable code of honor. 
            Each member brings unique strength to our fellowship.
          </p>
          
          <p 
            className="about-text"
            ref={el => paragraphsRef.current[2] = el}
          >
            Our legacy is written not in stone, but in the hearts of those 
            who dare to stand beside us. We do not seek dominion—we forge 
            brotherhood. We do not crave power—we earn respect through valor.
          </p>
          
          <div className="about-quote">
            <blockquote ref={el => paragraphsRef.current[3] = el}>
              "In unity, we find strength. In honor, we find purpose. 
              In legacy, we find immortality."
            </blockquote>
            <cite>— The Belmont Creed</cite>
          </div>
        </div>
        
        <div className="section-ornament bottom-ornament">✦</div>
      </div>
    </section>
  );
}
