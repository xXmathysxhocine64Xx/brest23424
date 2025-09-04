import React from 'react';
import { Card } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Construction } from 'lucide-react';
import { mayorInfo, currentWorks } from './mock';

export const MayorSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mayor info */}
          <Card className="bg-white border-slate-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={mayorInfo.avatar} alt={mayorInfo.name} />
                <AvatarFallback className="bg-blue-100 text-blue-600 text-2xl font-bold">
                  {mayorInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {mayorInfo.name}
                </h3>
                <Badge variant="secondary" className="mb-3 text-blue-600 bg-blue-50">
                  {mayorInfo.title}
                </Badge>
                <p className="text-slate-600">
                  {mayorInfo.description}
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-slate-700 leading-relaxed">
                "Notre priorité est de faire de Brest une ville attractive, 
                innovante et respectueuse de l'environnement, où il fait bon vivre 
                et travailler pour tous nos concitoyens."
              </p>
            </div>
          </Card>

          {/* Current works notification */}
          <Card className="bg-amber-50 border-amber-200 p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Construction className="w-6 h-6 text-amber-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {currentWorks.title}
                </h3>
                <p className="text-amber-800 mb-4">
                  {currentWorks.description}
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">
                    Informations pratiques :
                  </h4>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Circulation déviée par la rue Jean Jaurès</li>
                    <li>• Transport en commun : arrêt République fermé</li>
                    <li>• Commerces accessibles à pied</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};