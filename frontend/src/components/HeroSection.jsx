import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Users, MapPin, Briefcase, FileText, Heart, Building2, UserCheck, GraduationCap, Leaf } from 'lucide-react';
import { cityStats, mainServices, serviceCategories } from './mock';

export const HeroSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      Users,
      MapPin,
      Briefcase,
      FileText,
      Heart,
      Building2,
      UserCheck,
      GraduationCap,
      Leaf
    };
    return icons[iconName] || Users;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27edd2c9417b8a0ed2194b0f3a9f0a57b4306f6&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-with-skyscrapers-4890-large.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop" 
            alt="Vue de Brest"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Main title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bienvenue à Brest
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Une ville moderne et dynamique au service de ses citoyens. Ensemble, 
            nous construisons l'avenir de notre commune.
          </p>
        </div>

        {/* City statistics */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center min-w-[200px] hover:bg-white/15 transition-all duration-300">
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{cityStats.population}</div>
            <div className="text-slate-200 font-medium">Habitants</div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center min-w-[200px] hover:bg-white/15 transition-all duration-300">
            <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{cityStats.area}</div>
            <div className="text-slate-200 font-medium">Superficie</div>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 text-center min-w-[200px] hover:bg-white/15 transition-all duration-300">
            <Briefcase className="w-12 h-12 text-white mx-auto mb-4" />
            <div className="text-4xl font-bold text-white mb-2">{cityStats.activeProjects}</div>
            <div className="text-slate-200 font-medium">Projets actifs</div>
          </Card>
        </div>

        {/* Main service buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {mainServices.map((service) => {
            const IconComponent = getIcon(service.icon);
            return (
              <Button
                key={service.id}
                size="lg"
                className={`px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 ${
                  service.color === 'white' 
                    ? 'bg-white text-slate-900 hover:bg-slate-100' 
                    : 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-slate-900'
                }`}
              >
                <IconComponent className="w-6 h-6 mr-3" />
                {service.title}
              </Button>
            );
          })}
        </div>

        {/* Service categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {serviceCategories.map((category) => {
            const IconComponent = getIcon(category.icon);
            return (
              <Card 
                key={category.id}
                className="bg-slate-900/50 backdrop-blur-md border-slate-700/50 p-6 text-center hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group"
              >
                <IconComponent className="w-10 h-10 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold mb-2">{category.title}</h3>
                <p className="text-slate-300 text-sm">{category.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};