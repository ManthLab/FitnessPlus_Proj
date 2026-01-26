'use client';

import { useEffect, useRef, useState } from 'react';

export default function Pricing() {
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

  // General Training Packages data
  const generalTraining = [
    { duration: 'MONTHLY', training: '1499', registration: '499' },
    { duration: 'QUARTERLY', training: '3499', registration: '499' },
    { duration: 'HALF YEARLY', training: '5999', registration: '499' },
    { duration: 'YEARLY', training: '9999', registration: '499' },
  ];

  // Personal Training Packages data
  const personalTraining = [
    { duration: 'MONTHLY', gold: '5999', silver: '3499' },
    { duration: 'QUARTERLY', gold: '17999', silver: '10499' },
    { duration: 'HALF YEARLY', gold: '35999', silver: '20999' },
    { duration: 'YEARLY', gold: '71999', silver: '41999' },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Our MEMBERSHIP PLANS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible packages designed to fit your fitness goals and budget
          </p>
        </div>

        {/* General Training Packages Table */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">
            GENERAL TRAINING PACKAGES
          </h3>
          <div className="overflow-x-auto rounded-lg border border-secondary/50">
            <table className="w-full">
              <thead>
                <tr className="bg-card/50 border-b-2 border-secondary/50">
                  <th className="px-6 py-4 text-left font-bold text-foreground border-r border-secondary/50">
                    DURATION
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-foreground border-r border-secondary/50">
                    GENERAL TRAINING
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-foreground">
                    REGISTRATION
                  </th>
                </tr>
              </thead>
              <tbody>
                {generalTraining.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-secondary/30 hover:bg-card/30 transition-colors duration-300 last:border-b-0"
                  >
                    <td className="px-6 py-4 font-bold text-foreground border-r border-secondary/30">
                      {item.duration}
                    </td>
                    <td className="px-6 py-4 text-center text-2xl font-bold text-secondary border-r border-secondary/30">
                      ₹{item.training}
                    </td>
                    <td className="px-6 py-4 text-center text-2xl font-bold text-secondary">
                      ₹{item.registration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Personal Training Packages Table */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{
            animationDelay: isVisible ? '200ms' : '0ms',
          }}
        >
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">
            PERSONAL TRAINING PACKAGES
          </h3>
          <div className="overflow-x-auto rounded-lg border border-secondary/50">
            <table className="w-full">
              <thead>
                <tr className="bg-card/50 border-b-2 border-secondary/50">
                  <th className="px-6 py-4 text-left font-bold text-foreground border-r border-secondary/50">
                    DURATION
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-secondary border-r border-secondary/50">
                    GOLD
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-secondary">
                    SILVER
                  </th>
                </tr>
              </thead>
              <tbody>
                {personalTraining.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-secondary/30 hover:bg-card/30 transition-colors duration-300 last:border-b-0"
                  >
                    <td className="px-6 py-4 font-bold text-foreground border-r border-secondary/30">
                      {item.duration}
                    </td>
                    <td className="px-6 py-4 text-center text-2xl font-bold text-secondary border-r border-secondary/30">
                      ₹{item.gold}
                    </td>
                    <td className="px-6 py-4 text-center text-2xl font-bold text-secondary">
                      ₹{item.silver}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cross Fit Sessions */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
          style={{
            animationDelay: isVisible ? '400ms' : '0ms',
          }}
        >
          <h3 className="text-3xl font-bold text-secondary mb-4">CROSS FIT SESSIONS</h3>
          <p className="text-3xl font-bold text-primary mb-8">Only ₹100 per session</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Enroll Now
          </button>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 pt-8 border-t border-secondary/30">
          <p className="text-muted-foreground mb-2">For more information, contact us:</p>
          <p className="text-2xl font-bold text-secondary">+91 8286173387</p>
        </div>
      </div>
    </section>
  );
}
