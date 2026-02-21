'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Award, Trophy, Users, TrendingUp } from 'lucide-react';

export default function Contest() {
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

  const features = [
    {
      icon: TrendingUp,
      title: 'Fitness Challenges',
      description: 'Compete with members and push your limits together',
    },
    {
      icon: Award,
      title: 'Exclusive Rewards',
      description: 'Win prizes and recognition for your achievements',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a motivated community of fitness enthusiasts',
    },
    {
      icon: Trophy,
      title: 'Monthly Prizes',
      description: 'Grand prizes for top performers each month',
    },
  ];

  return (
    <section id="contest" className="relative py-20 bg-background overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative h-96 rounded-xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
              <Image
                src="/Fitness_Challenge.jpeg"
                //src="/fitness-contest.jpg"
                alt="Weekly Fitness Contest"
                fill
                className="object-cover object-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-semibold text-primary mb-2">FEATURED EVENT</p>
                <h3 className="text-2xl font-bold">Weekly Fitness Challenge</h3>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
            }`}
            style={{
              animationDelay: isVisible ? '200ms' : '0ms',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Weekly Competition</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Challenge yourself and compete with fellow members. Track your progress unlock new personal bests, earn exclusive rewards and be part of an inspiring community that pushes each other to achieve greatness.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-3 p-4 bg-card/50 border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 100 + 300}ms` : '0ms',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cursor-pointer px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-bold rounded-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Participate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
