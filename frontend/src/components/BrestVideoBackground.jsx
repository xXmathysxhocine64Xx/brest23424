import React, { useEffect, useRef, useState } from 'react';

export const CityVideoBackground = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Collection of working city video sources
  const cityVideoSources = [
    // Pixabay - reliable source
    "https://cdn.pixabay.com/video/2022/04/17/114977-703017749_large.mp4",
    // Pexels - reliable source
    "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4",
    // Coverr - working URLs
    "https://coverr.co/videos/9066/download?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    // Big Buck Bunny as ultimate fallback
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    // Sample videos
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4"
  ];

  // City/urban fallback images
  const cityImages = [
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&h=1080&fit=crop", // City skyline
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&h=1080&fit=crop", // Urban night
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&h=1080&fit=crop", // City aerial
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
        console.log(`✅ City video loaded successfully: ${cityVideoSources[currentVideoIndex]}`);
      };

      const handleError = () => {
        console.log(`❌ Video failed to load, trying next source... (${currentVideoIndex + 1}/${cityVideoSources.length})`);
        if (currentVideoIndex < cityVideoSources.length - 1) {
          setCurrentVideoIndex(prev => prev + 1);
        } else {
          console.log("📸 All videos failed, using fallback images");
          setVideoLoaded(false);
        }
      };

      const handleCanPlay = () => {
        console.log("🎬 Video can start playing");
        video.play().catch(e => console.log("Playback failed:", e));
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);

      // Set a timeout to try next video if current one takes too long
      const timeout = setTimeout(() => {
        if (!videoLoaded && currentVideoIndex < cityVideoSources.length - 1) {
          console.log("⏰ Video timeout, trying next source");
          setCurrentVideoIndex(prev => prev + 1);
        }
      }, 8000);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
        clearTimeout(timeout);
      };
    }
  }, [currentVideoIndex, cityVideoSources.length, videoLoaded]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full object-cover transition-opacity duration-2000 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          filter: 'brightness(0.6) contrast(1.2) saturate(1.1)',
          transform: 'scale(1.02)'
        }}
        poster={cityImages[0]}
        key={currentVideoIndex}
      >
        <source src={cityVideoSources[currentVideoIndex]} type="video/mp4" />
      </video>

      {/* Fallback background images with cinematic effect */}
      {!videoLoaded && (
        <div className="absolute inset-0">
          {cityImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-5000 ${
                index === 0 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                filter: 'brightness(0.7) contrast(1.1)',
                animation: `ken-burns-${index} 25s ease-in-out infinite alternate`,
                animationDelay: `${index * 8}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Cinematic overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-slate-900/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40" />
      
      {/* Urban atmosphere effects */}
      <div className="absolute inset-0 opacity-30">
        {/* Moving light streaks like car headlights */}
        <div 
          className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
          style={{ animation: 'light-sweep 10s linear infinite' }}
        />
        <div 
          className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
          style={{ animation: 'light-sweep 15s linear infinite reverse' }}
        />
        
        {/* Floating urban particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle-${i % 4} ${12 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Video loading indicator */}
      {!videoLoaded && currentVideoIndex < cityVideoSources.length && (
        <div className="absolute top-4 right-4 bg-slate-900/50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
          Chargement vidéo... ({currentVideoIndex + 1}/{cityVideoSources.length})
        </div>
      )}
    </div>
  );
};