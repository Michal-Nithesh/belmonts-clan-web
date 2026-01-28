import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    id: 1,
    year: '1147',
    title: 'The Founding',
    description: 'Lord Aldric united the scattered warriors under one banner, forging the Belmonts clan in the fires of brotherhood.',
    icon: '🏰'
  },
  {
    id: 2,
    year: '1203',
    title: 'Battle of Shadow\'s Peak',
    description: 'Against impossible odds, the Belmonts held the mountain pass for seven days, earning legendary status.',
    icon: '⚔'
  },
  {
    id: 3,
    year: '1289',
    title: 'The Great Alliance',
    description: 'Formed alliances with three neighboring kingdoms, expanding influence across the northern territories.',
    icon: '🤝'
  },
  {
    id: 4,
    year: '1356',
    title: 'Library of Lore',
    description: 'Established the grand library, preserving ancient knowledge and magical texts for future generations.',
    icon: '📚'
  },
  {
    id: 5,
    year: '1442',
    title: 'Tournament of Champions',
    description: 'Hosted the legendary tournament where warriors from across the realm competed for honor and glory.',
    icon: '🏆'
  },
  {
    id: 6,
    year: '1598',
    title: 'The Dragon Treaty',
    description: 'Negotiated peace with the ancient dragons, securing the skies and establishing mutual respect.',
    icon: '🐉'
  },
  {
    id: 7,
    year: '1723',
    title: 'Expansion Era',
    description: 'Extended clan influence to coastal regions, establishing new strongholds and trade routes.',
    icon: '⛵'
  },
  {
    id: 8,
    year: 'Present',
    title: 'The New Chapter',
    description: 'The Belmonts continue to thrive, adapting ancient wisdom to modern challenges while preserving sacred traditions.',
    icon: '✨'
  }
];

export default function Timeline() {
  const sectionRef = useRef();
  const itemsRef = useRef([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
          });
        }
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="timeline" className="timeline" ref={sectionRef}>
      <div className="timeline-container">
        <h2 className="section-title">
          <span className="title-accent">━━━</span>
          Chronicles of Glory
          <span className="title-accent">━━━</span>
        </h2>
        
        <p className="timeline-intro">
          Centuries of honor, valor, and legendary achievements written in the annals of history
        </p>
        
        <div className="timeline-line"></div>
        
        <div className="timeline-content">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              ref={el => itemsRef.current[index] = el}
            >
              <div className="timeline-marker">
                <span className="marker-icon">{achievement.icon}</span>
              </div>
              
              <div className="timeline-card">
                <div className="card-year">{achievement.year}</div>
                <h3 className="card-title">{achievement.title}</h3>
                <p className="card-description">{achievement.description}</p>
                <div className="card-decoration">
                  <span>◈</span>
                  <span>━</span>
                  <span>◈</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
