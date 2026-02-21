

"use client";

import React from "react";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // console.log("Sending form data:", formData);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong.");
  }
};
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8286173387",
      href: "tel:+918286173387",
    },
    {
      icon: Mail,
      title: "Email",
      content: "fitplus2912@gmail.com",
      href: "mailto:fitplus2912@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content:
        "Sai Tirtha Apartment, Near Samrat Chawk, Thakurwadi, Dombivli West",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+91 8286173387",
      href: "https://wa.me/918286173387",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Reach out using any
            of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-start gap-4 p-6 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </div>
              </a>
            ))}

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-background border border-border rounded-lg overflow-hidden">
              <iframe
                title="Fitness Plus Gym Location - Dombivli West"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.382245283773!2d73.07821357525401!3d19.22216588201276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf1d1a8bd391%3A0x382eedde61647b6b!2sFit%20Plus%20gym!5e0!3m2!1sen!2sin!4v1770101371258!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-background border border-border rounded-lg p-8"
            >
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                Send Message
              </button>

              <div className="pt-4 border-t border-border">
                <p className="text-center text-muted-foreground mb-4">
                  Or reach us on WhatsApp
                </p>
                <a
                  href="https://wa.me/918286173387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 border-2 border-green-500 text-green-500 hover:bg-green-500/10 rounded-lg font-bold transition-all duration-300"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
