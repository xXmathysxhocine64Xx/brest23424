import React, { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main animated background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(30, 41, 59, 0.9), rgba(51, 65, 85, 0.8), rgba(71, 85, 105, 0.9)), url('https://images.unsplash.com/photo-1580825451286-4b42f2650edf?w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Animated particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/10 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
      
      {/* Moving light streaks */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" 
             style={{ animationDuration: '8s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse" 
             style={{ animationDuration: '12s', animationDelay: '4s' }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 animated-gradient opacity-80" />
    </div>
  );
};