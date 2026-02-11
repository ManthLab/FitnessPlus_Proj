'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart, Users, Zap, TrendingUp, Shield, Music, DumbbellIcon, Apple, Activity, Target, Move, RefreshCcw, UserCheck, Salad, Handshake } from 'lucide-react';

export default function Services() {
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

  const services = [
    {
      icon: Handshake,
      title: 'Personal Training',
      description: 'One-on-one sessions tailored to your goals with certified trainers',
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Dynamic group fitness classes including HIIT, Yoga, and Boxing',
    },
    {
      icon: DumbbellIcon,
      title: 'Strength Training',
      description: 'Complete strength and conditioning programs for all levels',
    },
    {
      icon: Salad,
      title: 'Nutrition Guidance',
      description: 'Expert nutritional coaching to complement your training',
    },
    {
      icon: Activity,
      title: 'Cardio Programs',
      description: 'Advanced cardio training with state-of-the-art equipment',
    },
    {
      icon: Music,
      title: 'Mind & Body',
      description: 'Holistic wellness including meditation and recovery sessions',
    },
    {
      icon: Target,
      title: 'Functional Training',
      description: 'Real-world movement training to improve strength, balance, coordination, and performance',
    },
    {
      icon: Move,
      title: 'Flexibility & Mobility',
      description: 'Targeted stretching and mobility exercises to enhance movement and reduce injury risk',
    },
    {
      icon: RefreshCcw,
      title: 'Body Transformation Programs',
      description: 'Structured training plans focused on fat loss, muscle gain, and measurable results',
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you reach your goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-background border border-border rounded-xl p-8 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-primary/10 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
