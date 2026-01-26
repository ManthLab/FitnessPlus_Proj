'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Trainers() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const trainers = [
    {
      name: 'Alex Johnson',
      specialty: 'Strength & Conditioning',
      image: '/trainer-professional.jpg',
      bio: 'Certified NASM-PES with 10+ years of experience',
    },
    {
      name: 'Sarah Martinez',
      specialty: 'HIIT & Cardio',
      image: '/trainer-professional.jpg',
      bio: 'ACE certified instructor specializing in cardio',
    },
    {
      name: 'Mike Chen',
      specialty: 'Bodybuilding Coach',
      image: '/trainer-professional.jpg',
      bio: 'IFBB Pro Card holder and nutrition specialist',
    },
    {
      name: 'Emma Wilson',
      specialty: 'Yoga & Recovery',
      image: '/trainer-professional.jpg',
      bio: 'RYT 500 certified yoga instructor',
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expert Trainers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional and certified coaches ready to guide your fitness journey
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="bg-primary hover:bg-primary/80 p-2 rounded-full text-primary-foreground transition-colors">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="bg-primary hover:bg-primary/80 p-2 rounded-full text-primary-foreground transition-colors">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="bg-primary hover:bg-primary/80 p-2 rounded-full text-primary-foreground transition-colors">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{trainer.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{trainer.specialty}</p>
                <p className="text-sm text-muted-foreground">{trainer.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
