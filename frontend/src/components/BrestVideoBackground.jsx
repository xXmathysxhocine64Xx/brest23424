import React, { useEffect, useRef, useState } from 'react';

export const BrestVideoBackground = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [useVideo, setUseVideo] = useState(true);

  // Brest-themed images as primary background with video overlay
  const brestImages = [
    "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1920&h=1080&fit=crop", // Brest harbor
    "https://images.unsplash.com/photo-1544967882-6abaa4d22826?w=1920&h=1080&fit=crop", // Port city
    "https://images.unsplash.com/photo-1580825451286-4b42f2650edf?w=1920&h=1080&fit=crop", // Maritime city
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video && useVideo) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
        console.log("✅ Video loaded successfully");
      };

      const handleError = () => {
        console.log("❌ Video failed to load, using beautiful Brest images instead");
        setVideoLoaded(false);
        setUseVideo(false);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      // Set a timeout to fallback if video takes too long
      const timeout = setTimeout(() => {
        if (!videoLoaded) {
          console.log("⏰ Video timeout, switching to images");
          setUseVideo(false);
        }
      }, 5000);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        clearTimeout(timeout);
      };
    }
  }, [useVideo, videoLoaded]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video element (when available) */}
      {useVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-60' : 'opacity-0'
          }`}
          style={{ 
            filter: 'brightness(0.8) contrast(1.1) saturate(1.2)',
            transform: 'scale(1.05)'
          }}
          poster={brestImages[0]}
        >
          {/* Working video source */}
          <source src="https://player.vimeo.com/external/470810290.hd.mp4?s=7c7d0ac5bc5db5b8b8b8a05b06b7dccf1e5a5d92&profile_id=175" type="video/mp4" />
        </video>
      )}

      {/* Main background - beautiful Brest images with Ken Burns effect */}
      <div className="absolute inset-0">
        {brestImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-4000 ${
              index === 0 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              animation: `ken-burns-${index} 20s ease-in-out infinite alternate`,
              animationDelay: `${index * 7}s`
            }}
          />
        ))}
      </div>

      {/* Overlay gradients for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20" />
      
      {/* Subtle animated light effects */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
          style={{ animation: 'light-sweep 12s linear infinite' }}
        />
        <div 
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{ animation: 'light-sweep 18s linear infinite reverse' }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle-${i % 4} ${8 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};