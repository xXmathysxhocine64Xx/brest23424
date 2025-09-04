import React from 'react';
import { Separator } from './ui/separator';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  const quickLinks = [
    { name: 'Démarches en ligne', href: '#' },
    { name: 'État civil', href: '#' },
    { name: 'Urbanisme', href: '#' },
    { name: 'Vie associative', href: '#' },
    { name: 'Transport', href: '#' }
  ];

  const services = [
    { name: 'Passeport/CNI', href: '#' },
    { name: 'Inscription scolaire', href: '#' },
    { name: 'Mariage/PACS', href: '#' },
    { name: 'Permis de construire', href: '#' },
    { name: 'Action sociale', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Hôtel de Ville</p>
                  <p>2 rue Frézier</p>
                  <p>29200 Brest</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p>02 98 00 80 80</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p>contact@brest.fr</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <p>Lun-Ven : 8h30-17h30</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="#" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-2">Newsletter</h4>
              <p className="text-sm mb-3">Restez informé des actualités de la ville</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors duration-200 text-sm">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 Ville de Brest. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Mentions légales
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Plan du site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};