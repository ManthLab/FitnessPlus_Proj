'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contest', href: '#contest' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handlePricingClick = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleJoinClick = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <span className="text-sm text-muted-foreground hidden sm:inline">FITNESS</span>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PLUS
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={handleJoinClick}
              className="cursor-pointer px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in-down">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={handleJoinClick}
              className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all duration-300"
            >
              Join Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
