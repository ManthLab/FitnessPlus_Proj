"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function Gall() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const galleryMedia = [
    {
      type: "video",
      src: "/Gym_edited - Trim.mp4",
      alt: "State-of-the-art equipment",
      title: "Premium Equipment",
    },
    {
      title: "Transformations",
      media: [
        { type: "image", src: "/1_crop_Transform.jpeg", alt: "Transform_1" },
        { type: "image", src: "/2_crop_Transform.jpeg", alt: "Transform_2" },
      ],
    },
    {
      type: "image",
      src: "/Collage_2.png",
      alt: "Group training session",
      title: "Success Stories",
    },
    {
      type: "image",
      src: "/Collage_3.png",
      alt: "Group training session",
      title: "Success Stories",
    },
    {
      type: "video",
      src: "/Trainers_edited.mp4",
      alt: "Strength training area",
      title: "Weight Room",
    },
    {
      type: "image",
      src: "/Leg_press.jpeg",
      alt: "Member transformation",
      title: "Success Stories",
    },
    {
      type: "video",
      src: "/Dumbell_Rack_2 - .mp4",
      alt: "Strength training area",
      title: "Weight Room",
    },
    {
      type: "video",
      src: "/Cardio_audio.mp4",
      alt: "Cardio section",
      title: "Cardio Area",
    },
    {
      type: "video",
      src: "/Lucky_Draw.mp4",
      alt: "Lucky Draw",
      title: "Lucky Draw",
    },
    {
      type: "video",
      src: "/Cricket.mp4",
      alt: "Sports Event",
      title: "Sports Day",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Facility{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our state-of-the-art facility and transformation stories
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryMedia.map((item, index) => (
            <div
              key={index}
              className={`relative h-64 md:h-72 rounded-lg overflow-hidden group cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 80}ms` : "0ms",
              }}
              onClick={() => {
                setSelectedCategory(index);
              }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Light Box */}
      {selectedCategory !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedCategory(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedCategory(null)}
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full h-full max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryMedia[selectedCategory].type === "image" ? (
              <Image
                src={galleryMedia[selectedCategory].src || "/placeholder.svg"}
                alt={galleryMedia[selectedCategory].alt}
                fill
                className="object-contain"
              />
            ) : (
              <video
                src={galleryMedia[selectedCategory].src}
                controls
                autoPlay
                className="max-h-full max-w-full"
              />
            )}
          </div>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();

              if (selectedCategory === null) return;

              setSelectedCategory((prev) =>
                prev === null
                  ? null
                  : prev === 0
                    ? galleryMedia.length - 1
                    : prev - 1,
              );
            }}
          >
            {"<"}
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/80 text-primary-foreground p-2 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCategory((prev) =>
                prev === null
                  ? null
                  : prev === galleryMedia.length - 1
                    ? 0
                    : prev + 1,
              );
            }}
          >
            {">"}
          </button>
        </div>
      )}
    </section>
  );
}
