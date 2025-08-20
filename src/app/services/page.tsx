
"use client";

import { useState } from "react";
import Image from 'next/image';
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Users, Zap, ArrowRight, Shield, MapPin, Clock } from 'lucide-react';
import Link from "next/link";

const services = [
    {
      img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=600",
      hint: "security audit",
      category: "SECURITY AUDIT",
      title: "Cybersecurity Risk Assessment",
      description: "Identify vulnerabilities and quantify risks to prioritize security investments."
    },
    {
      img: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=600",
      hint: "network diagram",
      category: "NETWORK DIAGRAM",
      title: "Security Architecture Design",
      description: "Design secure IT/OT infrastructure to protect against threats using different approaches like Defense-in-Depth."
    },
    {
      img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=600",
      hint: "firewall configuration",
      category: "FIREWALL CONFIGURATION",
      title: "Cybersecurity Implementation",
      description: "Implement & update protective measures such as encryption, firewalls, authentication, and intrusion detection."
    },
    {
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600",
      hint: "vendor security",
      category: "VENDOR SECURITY",
      title: "Third-Party Risk Management",
      description: "Assess and manage cybersecurity risks associated with your third-party vendors and partners."
    },
    {
      img: "https://images.unsplash.com/photo-1614064548237-096537d54648?auto=format&fit=crop&q=80&w=600",
      hint: "hacker code",
      category: "HACKER CODE",
      title: "Penetration Testing",
      description: "Simulate real-world cyber attacks (white/grey box) to identify and address security weaknesses."
    },
    {
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      hint: "system lifecycle",
      category: "SYSTEM LIFECYCLE",
      title: "Operation & Maintenance",
      description: "Ensure optimal performance, security, and compliance of IACS throughout their entire lifecycle."
    }
];

export default function ServicesPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />
      <main>
        {/* Hero Section */}
        <AnimateOnScroll animation="fade-up">
            <section
            className="relative bg-cover bg-center h-[60vh] min-h-[400px]"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=2070')" }}
            data-ai-hint="cybersecurity code"
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white">Learn from Industrial Cybersecurity Experts</h1>
                    <p className="mt-4 text-xl text-gray-200 max-w-2xl">Start your journey to a more secure future.</p>
                </div>
            </section>
        </AnimateOnScroll>

        {/* Our Approach Section */}
        <AnimateOnScroll animation="fade-up">
            <section className="max-w-6xl mx-auto py-16 lg:py-24 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
                    Implementing a comprehensive cybersecurity strategy involves a combination of different services tailored to the specific needs and risks of your business. We analyze, design, and maintain robust security postures to protect your most critical assets.
                </p>
          
                <div className="mt-20 w-full max-w-lg mx-auto">
                    <svg width="100%" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" aria-labelledby="approachTitle approachDesc">
                        <title id="approachTitle">Our Cyclical Cybersecurity Approach</title>
                        <desc id="approachDesc">A circular diagram showing four stages: Analyze, Design, Protect, and Monitor.</desc>
                        
                        <circle cx="210" cy="210" r="65" fill="hsl(var(--primary))" />
                        <text x="210" y="205" fontFamily="Inter, sans-serif" fontSize="16" fill="hsl(var(--primary-foreground))" textAnchor="middle" fontWeight="bold">Our</text>
                        <text x="210" y="225" fontFamily="Inter, sans-serif" fontSize="16" fill="hsl(var(--primary-foreground))" textAnchor="middle" fontWeight="bold">Process</text>

                        <circle cx="210" cy="210" r="150" fill="none" stroke="hsl(var(--border))" strokeWidth="2" strokeDasharray="10, 10" />

                        <g transform="translate(170, 20)">
                            <circle cx="40" cy="40" r="40" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
                            <Users x="20" y="20" width="40" height="40" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
                            <text x="40" y="100" fontFamily="Inter, sans-serif" fontSize="14" fill="hsl(var(--foreground))" textAnchor="middle" fontWeight="600">Analyze</text>
                        </g>
                        
                        <g transform="translate(320, 170)">
                            <circle cx="40" cy="40" r="40" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
                            <Zap x="20" y="20" width="40" height="40" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
                            <text x="40" y="100" fontFamily="Inter, sans-serif" fontSize="14" fill="hsl(var(--foreground))" textAnchor="middle" fontWeight="600">Design</text>
                        </g>

                        <g transform="translate(170, 320)">
                            <circle cx="40" cy="40" r="40" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
                            <Shield x="20" y="20" width="40" height="40" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
                            <text x="40" y="100" fontFamily="Inter, sans-serif" fontSize="14" fill="hsl(var(--foreground))" textAnchor="middle" fontWeight="600">Protect</text>
                        </g>

                        <g transform="translate(20, 170)">
                            <circle cx="40" cy="40" r="40" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
                            <Clock x="20" y="20" width="40" height="40" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
                            <text x="40" y="100" fontFamily="Inter, sans-serif" fontSize="14" fill="hsl(var(--foreground))" textAnchor="middle" fontWeight="600">Monitor</text>
                        </g>
                    </svg>
                </div>
          
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-foreground">10+</div>
                        <div className="mt-1 text-muted-foreground">Satisfied Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-foreground">15+</div>
                        <div className="mt-1 text-muted-foreground">Assessed Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-foreground">22+</div>
                        <div className="mt-1 text-muted-foreground">Collaborators</div>
                    </div>
                </div>
            </section>
        </AnimateOnScroll>

        {/* Why We Stand Out Section */}
        <AnimateOnScroll animation="fade-up">
            <section className="py-16 lg:py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">Why We Stand Out</h2>
                        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">We don't just offer services; we deliver strategic advantages that set you apart.</p>
                    </div>
                    <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800">
                            <div className="bg-gray-900 h-16 w-16 rounded-full mx-auto flex items-center justify-center">
                               <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mt-6">Industry Experts</h3>
                            <p className="text-gray-300 mt-2">Our team comprises certified professionals with decades of experience in the industrial sector.</p>
                        </div>
                        <div className="p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800">
                            <div className="bg-gray-900 h-16 w-16 rounded-full mx-auto flex items-center justify-center">
                               <MapPin size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mt-6">Tailored Solutions</h3>
                            <p className="text-gray-300 mt-2">We don't use a one-size-fits-all approach. Every solution is customized to your unique environment.</p>
                        </div>
                        <div className="p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800">
                            <div className="bg-gray-900 h-16 w-16 rounded-full mx-auto flex items-center justify-center">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-xl font-semibold mt-6">24/7 Proactive Support</h3>
                            <p className="text-gray-300 mt-2">Our Security Operations Center is always on, monitoring threats before they can impact you.</p>
                        </div>
                    </div>
                </div>
            </section>
        </AnimateOnScroll>
        
        {/* Core Services Section */}
        <AnimateOnScroll animation="fade-up">
            <section className="max-w-7xl mx-auto py-16 lg:py-24 px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
                    <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">A complete suite of services to protect your digital and industrial assets.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out border border-border flex flex-col">
                            <Image src={service.img} alt={service.title} className="w-full h-48 object-cover" width={600} height={400} data-ai-hint={service.hint} />
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="text-muted-foreground uppercase text-xs font-semibold tracking-wider">{service.category}</span>
                                <h4 className="text-xl font-semibold mt-2">{service.title}</h4>
                                <p className="mt-2 text-muted-foreground text-sm">{service.description}</p>
                                <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mt-auto pt-4">
                                    See More
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AnimateOnScroll>

        {/* Call to Action Section */}
        <AnimateOnScroll animation="zoom-in">
             <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2070')" }} data-ai-hint="team collaboration">
                 <div className="absolute inset-0 bg-gray-900/70"></div>
                 <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                    <h3 className="text-3xl font-bold text-white">Ready to secure your operations?</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Reach out to us to explore how our tailored solutions can elevate and support your business goals.</p>
                    <Button size="lg" className="mt-8 bg-white text-gray-900 hover:bg-gray-200 transform hover:scale-105" onClick={() => setDemoOpen(true)}>Contact Us</Button>
                </div>
            </section>
        </AnimateOnScroll>
      </main>
      <Footer />
      <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
