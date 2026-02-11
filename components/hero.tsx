'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-gym.jpg"
          alt="Fitness Plus Gym"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          TRANSFORM YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">BODY</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
          Join thousands who've achieved their fitness goals with our expert trainers and state-of-the-art equipment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105"
          >
            Start Free Trial
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cursor-pointer px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-bold text-lg transition-all duration-300"
          >
            View Plans
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
}
