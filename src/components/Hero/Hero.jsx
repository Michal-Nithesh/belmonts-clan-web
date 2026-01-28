import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

// Medieval Fortress Component
function Fortress() {
  const fortressRef = useRef();
  
  return (
    <group ref={fortressRef} position={[0, -3, -15]}>
      {/* Main fortress wall */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[8, 3, 1.5]} />
        <meshStandardMaterial color="#2a2419" roughness={0.9} />
      </mesh>
      
      {/* Central keep */}
      <mesh position={[0, 3.5, 0]}>
        <boxGeometry args={[3, 4, 1.5]} />
        <meshStandardMaterial color="#1a1410" roughness={0.9} />
      </mesh>
      
      {/* Tower array */}
      {[-4, -2, 2, 4].map((x, i) => (
        <group key={i} position={[x, 0, 0]}>
          <mesh position={[0, 2.5, 0]}>
            <cylinderGeometry args={[0.6, 0.6, 5, 8]} />
            <meshStandardMaterial color="#2a2419" roughness={0.9} />
          </mesh>
          <mesh position={[0, 5.5, 0]}>
            <coneGeometry args={[0.8, 1.5, 8]} />
            <meshStandardMaterial color="#1a1410" roughness={0.9} />
          </mesh>
        </group>
      ))}
      
      {/* Battlements */}
      {[-3, -1, 1, 3].map((x, i) => (
        <mesh key={i} position={[x, 3.2, 0]}>
          <boxGeometry args={[0.3, 0.5, 0.3]} />
          <meshStandardMaterial color="#1a1410" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

// Mountain Range Component
function Mountains() {
  const mountainsRef = useRef();
  
  return (
    <group ref={mountainsRef} position={[0, -4, -25]}>
      {/* Far mountains */}
      {[-10, -5, 0, 5, 10].map((x, i) => (
        <mesh key={i} position={[x + Math.random() * 2, Math.random() * 2, 0]} scale={[1.5, 2 + Math.random(), 1]}>
          <coneGeometry args={[3, 6, 4]} />
          <meshStandardMaterial 
            color="#3a3428"
            transparent
            opacity={0.6}
            fog={true}
          />
        </mesh>
      ))}
      
      {/* Mid-range mountains */}
      {[-8, -3, 2, 7].map((x, i) => (
        <mesh key={i} position={[x, Math.random() * 1.5, 5]} scale={[1.2, 1.8, 1]}>
          <coneGeometry args={[2.5, 5, 4]} />
          <meshStandardMaterial 
            color="#4a3d2f"
            transparent
            opacity={0.75}
            fog={true}
          />
        </mesh>
      ))}
    </group>
  );
}

// Layered Fog/Mist Component
function AtmosphericFog() {
  const fogRef = useRef();
  
  useFrame(({ clock }) => {
    if (fogRef.current) {
      const time = clock.getElapsedTime();
      fogRef.current.rotation.y = time * 0.01;
      fogRef.current.position.y = Math.sin(time * 0.3) * 0.2 - 1;
    }
  });
  
  return (
    <group ref={fogRef}>
      {/* Dense fog layer */}
      {[...Array(80)].map((_, i) => {
        const angle = (i / 80) * Math.PI * 2;
        const radius = 15 + Math.random() * 10;
        return (
          <mesh 
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.random() * 2 - 1.5,
              Math.sin(angle) * radius - 10
            ]}
            scale={[1 + Math.random() * 2, 1, 1 + Math.random() * 2]}
          >
            <sphereGeometry args={[1.5 + Math.random(), 8, 8]} />
            <meshBasicMaterial 
              color="#d4c5b0"
              transparent
              opacity={0.08}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Slow Moving Clouds
function Clouds() {
  const cloudsRef = useRef();
  
  useFrame(({ clock }) => {
    if (cloudsRef.current) {
      const time = clock.getElapsedTime();
      cloudsRef.current.position.x = Math.sin(time * 0.05) * 3;
    }
  });
  
  return (
    <group ref={cloudsRef} position={[0, 3, -8]}>
      {[...Array(15)].map((_, i) => (
        <mesh 
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            Math.random() * 4,
            (Math.random() - 0.5) * 15
          ]}
          scale={[2 + Math.random() * 2, 0.8, 1.5 + Math.random()]}
        >
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial 
            color="#c9b9a1"
            transparent
            opacity={0.15}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// Animated Banner/Flag
function Banner() {
  const bannerRef = useRef();
  
  useFrame(({ clock }) => {
    if (bannerRef.current) {
      const time = clock.getElapsedTime();
      const geometry = bannerRef.current.geometry;
      const positions = geometry.attributes.position;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const wave = Math.sin(x * 2.5 + time * 2.5) * 0.15 * (x + 1) * 0.5;
        positions.setZ(i, wave);
      }
      positions.needsUpdate = true;
    }
  });
  
  return (
    <mesh ref={bannerRef} position={[4, 1.5, -8]} rotation={[0, -0.4, 0]}>
      <planeGeometry args={[2.5, 2, 25, 25]} />
      <meshStandardMaterial 
        color="#8b7355"
        side={THREE.DoubleSide}
        roughness={0.85}
      />
    </mesh>
  );
}

// Floating Dust Particles
function DustParticles() {
  const dustRef = useRef();
  
  useFrame(({ clock }) => {
    if (dustRef.current) {
      dustRef.current.rotation.y = clock.getElapsedTime() * 0.01;
    }
  });
  
  const particles = [...Array(100)].map((_, i) => ({
    position: [
      (Math.random() - 0.5) * 30,
      Math.random() * 10 - 2,
      (Math.random() - 0.5) * 30
    ],
    scale: Math.random() * 0.05 + 0.02
  }));
  
  return (
    <group ref={dustRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.scale, 4, 4]} />
          <meshBasicMaterial 
            color="#d4c5b0"
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main Scene Component
function Scene() {
  useFrame(({ camera, mouse }) => {
    // Subtle parallax movement
    camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.05;
  });
  
  return (
    <>
      {/* Atmospheric lighting */}
      <ambientLight intensity={0.4} color="#d4c5b0" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={0.6}
        color="#d4a574"
      />
      <directionalLight 
        position={[-5, 5, -5]} 
        intensity={0.3}
        color="#8b7355"
      />
      <pointLight position={[0, 5, -10]} intensity={0.4} color="#d4c5b0" />
      
      {/* Fog effect */}
      <fog attach="fog" args={['#2d2419', 10, 35]} />
      
      {/* Scene elements */}
      <Mountains />
      <Fortress />
      <Banner />
      <AtmosphericFog />
      <Clouds />
      <DustParticles />
      <Stars radius={100} depth={50} count={3000} factor={3} fade speed={0.3} />
    </>
  );
}

export default function Hero() {
  const heroRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text reveal with parchment unroll effect
      gsap.from(textRef.current.children, {
        y: 120,
        opacity: 0,
        rotateX: -20,
        duration: 1.8,
        stagger: 0.4,
        ease: 'power3.out',
        delay: 0.7
      });
      
      // Animate button with embossed appearance
      gsap.from(buttonRef.current, {
        scale: 0,
        opacity: 0,
        rotateX: -30,
        duration: 1.2,
        ease: 'back.out(1.9)',
        delay: 2.3
      });
      
      // Add subtle floating animation to button
      gsap.to(buttonRef.current, {
        y: -5,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 3.5
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  const scrollToContent = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="hero" ref={heroRef}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="hero-canvas"
      >
        <Scene />
      </Canvas>
      
      <div className="hero-overlay">
        <div className="hero-content" ref={textRef}>
          <h1 className="hero-title">
            <span className="title-line">THE BELMONTS</span>
          </h1>
          <p className="hero-motto">
            <span className="motto-text">Forged in Honor • Bound by Legacy</span>
          </p>
        </div>
        
        <button 
          ref={buttonRef}
          className="hero-cta"
          onClick={scrollToContent}
        >
          <span className="cta-text">Enter the Kingdom</span>
          <span className="cta-icon">⚔</span>
        </button>
      </div>
    </section>
  );
}
