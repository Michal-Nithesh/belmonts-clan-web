import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Members.css';

gsap.registerPlugin(ScrollTrigger);

const clanMembers = [
  {
    id: 1,
    name: 'Lord Aldric',
    role: 'Leader',
    title: 'The Strategist',
    description: 'Master of tactics and diplomacy, guiding the clan with wisdom earned through countless campaigns.',
    icon: '👑'
  },
  {
    id: 2,
    name: 'Sir Gareth',
    role: 'Knight',
    title: 'The Vanguard',
    description: 'First into battle, last to retreat. A warrior whose blade has never known defeat.',
    icon: '⚔'
  },
  {
    id: 3,
    name: 'Lady Elara',
    role: 'Strategist',
    title: 'The Tactician',
    description: 'Her mind is sharper than any sword, turning impossible odds into glorious victories.',
    icon: '📜'
  },
  {
    id: 4,
    name: 'Shadow',
    role: 'Rogue',
    title: 'The Phantom',
    description: 'Unseen, unheard, unstoppable. Secrets are currency, and darkness is home.',
    icon: '🗡'
  },
  {
    id: 5,
    name: 'Brother Marcus',
    role: 'Healer',
    title: 'The Warden',
    description: 'Guardian of life and sacred keeper of ancient healing arts passed through generations.',
    icon: '✚'
  },
  {
    id: 6,
    name: 'Theron',
    role: 'Archer',
    title: 'The Hawkeye',
    description: 'A hundred paces or a thousand, his arrows find their mark with divine precision.',
    icon: '🏹'
  },
  {
    id: 7,
    name: 'Magistra Lyra',
    role: 'Scholar',
    title: 'The Lorekeeper',
    description: 'Keeper of forbidden knowledge and ancient magics, guardian of the clan\'s history.',
    icon: '📖'
  },
  {
    id: 8,
    name: 'Ironhide',
    role: 'Defender',
    title: 'The Bulwark',
    description: 'An immovable fortress of steel and will, protecting all who stand behind him.',
    icon: '🛡'
  }
];

export default function Members() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 1,
            },
            y: 100,
            opacity: 0,
            rotateX: 45,
          });
        }
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section id="members" className="members" ref={sectionRef}>
      <div className="members-container">
        <h2 className="section-title">
          <span className="title-accent">━━━</span>
          Our Fellowship
          <span className="title-accent">━━━</span>
        </h2>
        
        <p className="members-intro">
          Each warrior brings unique strength to our brotherhood. 
          United by honor, driven by purpose.
        </p>
        
        <div className="members-grid">
          {clanMembers.map((member, index) => (
            <div 
              key={member.id}
              className="member-card"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="card-header">
                    <div className="member-icon">{member.icon}</div>
                    <div className="member-role-badge">{member.role}</div>
                  </div>
                  
                  <div className="card-content">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-title">{member.title}</p>
                  </div>
                  
                  <div className="card-ornament">
                    <span className="ornament-left">◈</span>
                    <span className="ornament-center">━━━</span>
                    <span className="ornament-right">◈</span>
                  </div>
                </div>
                
                <div className="card-back">
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
