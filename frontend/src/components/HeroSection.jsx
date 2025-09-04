import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Users, MapPin, Briefcase, FileText, Heart, Building2, UserCheck, GraduationCap, Leaf } from 'lucide-react';
import { cityStats, mainServices, serviceCategories } from './mock';
import { BrestVideoBackground } from './BrestVideoBackground';

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
      {/* Brest video background */}
      <BrestVideoBackground />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Main title */}
        <div className="mb-16 float-animation">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text">
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