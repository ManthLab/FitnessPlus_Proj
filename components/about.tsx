'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Dumbbell, Users, Zap } from 'lucide-react';

export default function About() {
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

  const stats = [
    { icon: Users, label: 'Active Members', value: '5000+' },
    { icon: Dumbbell, label: 'Equipment Pieces', value: '200+' },
    { icon: Zap, label: 'Success Rate', value: '95%' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Image */}
          <div className="relative h-96 md:h-[500px]">
            <Image
              src="/Photo_wall.jpeg"
              //src="/gym-equipment.jpg"
              alt="Fitness Plus Facility"
              fill
              className="object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-xl" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fitness Plus</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2015, Fitness Plus has been a beacon of fitness excellence in the community. We&apos;re dedicated to helping individuals achieve their fitness goals through personalized training programs, world-class equipment, and unwavering support.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: to inspire and enable every member to transform their body and mind through fitness. With state-of-the-art facilities and a team of certified trainers, we provide the perfect environment for your fitness journey.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors duration-300 hover:bg-card/80">
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
