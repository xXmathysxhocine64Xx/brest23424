import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Users, MapPin, Briefcase, FileText, Heart, Building2, UserCheck, GraduationCap, Leaf } from 'lucide-react';
import { cityStats, mainServices, serviceCategories } from './mock';
import { CityVideoBackground } from './CityVideoBackground';

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
      {/* City video background */}
      <CityVideoBackground />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Main title - Better positioning */}
        <div className="mb-20 float-animation">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 gradient-text leading-tight">
            Bienvenue à Brest
          </h1>
          <p className="text-2xl md:text-3xl text-slate-100 max-w-5xl mx-auto leading-relaxed font-medium">
            Une ville moderne et dynamique au service de ses citoyens. Ensemble, 
            nous construisons l'avenir de notre commune.
          </p>
        </div>

        {/* Important city information */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <Card className="bg-red-600/20 backdrop-blur-md border-red-400/30 p-8 text-center min-w-[200px] hover:bg-red-500/25 transition-all duration-300 border-2">
            <div className="bg-red-500 p-3 rounded-full w-fit mx-auto mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.27 18.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">{cityStats.urgentInfo}</div>
            <div className="text-red-100 font-medium">15 SAMU</div>
          </Card>

          <Card className="bg-green-600/20 backdrop-blur-md border-green-400/30 p-8 text-center min-w-[200px] hover:bg-green-500/25 transition-all duration-300 border-2">
            <div className="bg-green-500 p-3 rounded-full w-fit mx-auto mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">{cityStats.serviceHours}</div>
            <div className="text-green-100 font-medium">Horaires d'ouverture</div>
          </Card>

          <Card className="bg-blue-600/20 backdrop-blur-md border-blue-400/30 p-8 text-center min-w-[200px] hover:bg-blue-500/25 transition-all duration-300 border-2">
            <div className="bg-blue-500 p-3 rounded-full w-fit mx-auto mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-white mb-2">{cityStats.waitTime}</div>
            <div className="text-blue-100 font-medium">Temps d'attente moyen</div>
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