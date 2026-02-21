"use client";

import { Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-primary/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.5fr_1fr_1.2fr_0.8fr] gap-x-8 gap-y-10 mb-8 items-start">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
              FITNESS PLUS
            </div>
            <p className="text-muted-foreground text-sm">
              Transform your life through fitness. Your journey starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <div className="w-fit">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Pricing",
                  "Contest",
                  "Gallery",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="grid grid-cols-2 gap-y-2">
              {[
                "Personal Training",
                "Group Classes",
                "Strength Training",
                "Nutrition",
                "Cardio",
                "Recovery",
                "Functional Training",
                "Flexibility & Mobility",
                "Body Transformation Programs",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4 mt-3">
              {[
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/fitnessplus_west_branch?igsh=M3Q1dXR3M3FoMzBu",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <social.icon size={30} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Fitness Plus. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a className="text-muted-foreground">Privacy Policy</a>
            <a className="text-muted-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
