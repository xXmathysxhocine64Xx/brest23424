import React, { useEffect, useRef, useState } from 'react';

export const BrestVideoBackground = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Collection of Brest-related videos and fallback options
  const videoSources = [
    // Try local or CDN hosted videos first
    "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-port-city-4891-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-coastal-city-4889-large.mp4",
    "https://player.vimeo.com/external/434045526.sd.mp4?s=c27edd2c9417b8a0ed2194b0f3a9f0a57b4306f6&profile_id=164",
    // YouTube embedded video as last resort
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1"
  ];

  const brestImages = [
    "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1920&h=1080&fit=crop", // Brest harbor
    "https://images.unsplash.com/photo-1544967882-6abaa4d22826?w=1920&h=1080&fit=crop", // Port city
    "https://images.unsplash.com/photo-1580825451286-4b42f2650edf?w=1920&h=1080&fit=crop", // Maritime city
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
        console.log("✅ Video loaded successfully");
      };

      const handleError = () => {
        console.log(`❌ Video failed to load, trying next source...`);
        if (currentVideoIndex < videoSources.length - 1) {
          setCurrentVideoIndex(prev => prev + 1);
        } else {
          console.log("📸 All videos failed, using fallback image");
          setVideoLoaded(false);
        }
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, [currentVideoIndex, videoSources.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          filter: 'brightness(0.7) contrast(1.1) saturate(1.2)',
          transform: 'scale(1.05)'
        }}
        poster={brestImages[0]}
        key={currentVideoIndex}
      >
        <source src={videoSources[currentVideoIndex]} type="video/mp4" />
      </video>

      {/* Fallback background images with Ken Burns effect */}
      {!videoLoaded && (
        <div className="absolute inset-0">
          {brestImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-3000 ${
                index === 0 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                animation: 'ken-burns 20s ease-in-out infinite alternate',
                animationDelay: `${index * 7}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Overlay gradients for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30" />
      
      {/* Subtle animated light effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          style={{ animation: 'light-sweep 15s linear infinite' }}
        />
      </div>
    </div>
  );
};