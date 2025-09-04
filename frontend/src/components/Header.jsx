import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, MapPin, Phone, Mail } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Actualités', href: '#actualites' },
    { name: 'Événements', href: '#evenements' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info - Improved */}
        <div className="flex items-center justify-between py-3 border-b border-slate-700 text-sm text-slate-200">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="font-medium">Hôtel de Ville - 2 rue Frézier, 29200 Brest</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              <span className="font-medium">02 98 00 80 80</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-400" />
              <span className="font-medium">contact@brest.fr</span>
            </div>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-full">
            <span className="text-green-400 font-semibold">🟢 Ouvert : Lun-Ven 8h30-17h30</span>
          </div>
        </div>

        {/* Main navigation - Enhanced */}
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">Ville de Brest</h1>
              <p className="text-blue-400 text-sm font-medium">Métropole océane • Service public</p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-800">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};