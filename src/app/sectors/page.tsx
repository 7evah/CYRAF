"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import giftt from "@/components/cybersecurity-framework.webp";

const timelineData = [
  {
    title: "Critical Infrastructure",
    description:
      "Protecting vital assets and networks fundamental to national security, economic stability, and public well-being.",
    videoSrc:
      "https://player.vimeo.com/video/1112911257?background=1&autoplay=1&loop=1&muted=1",
    vimeoId: "1112911257",
    align: "left",
  },
  {
    title: "Transportation",
    description:
      "Railway operators face evolving threats and regulations, requiring stronger cybersecurity measures to protect operational technology and ensure safe operations.",
    videoSrc:
      "https://player.vimeo.com/video/1112912708?background=1&autoplay=1&loop=1&muted=1",
    vimeoId: "1112912708",
    align: "right",
  },
  {
    title: "Power & Electricity",
    description:
      "Cyberattacks on energy systems can disrupt essential services and even compromise national security, making robust protection vital.",
    videoSrc:
      "https://player.vimeo.com/video/1112912666?background=1&autoplay=1&loop=1&muted=1",
    vimeoId: "1112912666",
    align: "left",
  },
  {
    title: "Healthcare",
    description:
      "From EHRs to medical devices, healthcare systems are prime cyber targets. Securing them is crucial for patient safety and public health.",
    videoSrc:
      "https://player.vimeo.com/video/1112912625?background=1&autoplay=1&loop=1&muted=1",
    vimeoId: "1112912625",
    align: "right",
  },
  {
    title: "Aviation",
    description:
      "Cyber threats to aviation can disrupt flight operations and endanger lives, making this sector a high-security priority.",
    videoSrc:
      "https://player.vimeo.com/video/1112912573?background=1&autoplay=1&loop=1&muted=1",
    vimeoId: "1112912573",
    align: "left",
  },
  {
    title: "Smart Cities",
    description:
      "Interconnected smart city systems need strong cybersecurity to ensure safety, reliability, and resilience against cyberattacks.",
    videoSrc:
      "https://player.vimeo.com/video/1112912501?background=1&autoplay=1&loop=1&muted=1",
    vimeoId: "1112912501",
    align: "right",
  },
];

// ✅ Vimeo video with poster (no inView, loads immediately)
const LazyVideo = ({ src, vimeoId }: { src: string; vimeoId: string }) => {
  const [poster, setPoster] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Fetch Vimeo thumbnail
  useEffect(() => {
    fetch(`https://vimeo.com/api/v2/video/${vimeoId}.json`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.thumbnail_large) {
          setPoster(data[0].thumbnail_large);
        }
      })
      .catch(() => {});
  }, [vimeoId]);

  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
      {/* Poster placeholder */}
      {poster && (
        <Image
          src={poster}
          alt="Video preview"
          fill
          className={`object-cover transition-opacity duration-700 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {/* Vimeo iframe (loads immediately) */}
      <iframe
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default function SectorsPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] md:h-screen bg-cover bg-center text-center text-white overflow-hidden">
          <Image
            src={giftt}
            alt="Cybersecurity Expertise"
            fill
            priority
            className="absolute z-0 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center items-center py-24 md:py-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Our Expertise Across Critical Sectors
            </h1>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl">
              Specialized cybersecurity solutions to protect the systems that
              power our world, ensuring resilience against sophisticated threats.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-16 bg-background"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)",
              transform: "translateY(1px)",
            }}
          />
        </section>

        {/* Timeline Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="hidden md:block sectors-timeline-line"></div>
            <div className="space-y-12 md:space-y-20">
              {timelineData.map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fade-up"
                  className="sectors-timeline-item"
                >
                  {item.align === "left" ? (
                    <>
                      <div className="sectors-timeline-content text-left">
                        <h2 className="text-2xl md:text-3xl font-bold">
                          {item.title}
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <div className="hidden md:block sectors-timeline-node" />
                      <div className="sectors-timeline-content">
                        <LazyVideo src={item.videoSrc} vimeoId={item.vimeoId} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="sectors-timeline-content">
                        <LazyVideo src={item.videoSrc} vimeoId={item.vimeoId} />
                      </div>
                      <div className="hidden md:block sectors-timeline-node" />
                      <div className="sectors-timeline-content text-left">
                        <h2 className="text-2xl md:text-3xl font-bold">
                          {item.title}
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <AnimateOnScroll animation="zoom-in">
          <section
            className="relative py-20 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070')",
            }}
          >
            <div className="absolute inset-0 bg-gray-900/70" />
            <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
              <h3 className="text-3xl font-bold text-white">
                Is Your Business Covered?
              </h3>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Contact us today to learn more about our tailored cybersecurity
                solutions and ensure your critical assets are protected.
              </p>
              <Button
                size="lg"
                className="mt-8 bg-white text-gray-900 hover:bg-gray-200 transform hover:scale-105"
                onClick={() => setDemoOpen(true)}
              >
                Get In Touch
              </Button>
            </div>
          </section>
        </AnimateOnScroll>
      </main>
      <Footer />
      <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
