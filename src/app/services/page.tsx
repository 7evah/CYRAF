
"use client";

import { useState, useRef } from "react";
import Image from 'next/image';
import CountUp from 'react-countup';
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Search, ShieldCheck, Eye, BellRing, Recycle, ArrowRight } from 'lucide-react';
import Link from "next/link";

const services = [
  {
    img: "https://www.getgsi.com/hubfs/GSI%20Website%20Assets/Cybersecurity%20Assessments.png",
    hint: "security audit",
    title: "Cybersecurity Risk Assessment",
    text: "Identify vulnerabilities and quantify risks to prioritize security investments wisely and effectively.",
    href: "/services/cybersecurity-risk-assessment"
  },
  {
    img: "https://www.compuquip.com/hubfs/images/blog-images/building-a-strong-enterprise-security-architecture-framework.jpg",
    hint: "network diagram",
    title: "Security Architecture Design",
    text: "Design secure IT/OT infrastructure to protect against threats using different approaches like Defense-in-Depth.",
    href: "/services/security-architecture-design"
  },
  {
    img: "https://govciomediaresearch.imgix.net/wp-content/uploads/2023/05/1000x650px_new_measures_put_cybersecurity_shutterstock_2137304159.jpg",
    hint: "firewall configuration",
    title: "Cybersecurity Implementation",
    text: "Implement & update protective measures such as encryption, firewalls, authentication, and intrusion detection.",
    href: "/services/cybersecurity-implementation"
  },
  {
    img: "https://www.kiteworks.com/wp-content/uploads/2022/01/Third-party-risk-management-glossary.webp",
    hint: "vendor security",
    title: "Third-Party Risk Management",
    text: "Assess and manage cybersecurity risks associated with your third-party vendors and partners.",
    href: "/services/third-party-risk-management"
  },
  {
    img: "https://atcbiocides.com/wp-content/uploads/2021/11/regulatory-compliance.jpg",
    hint: "compliance checklist",
    title: "Compliance and Regulatory Advisory",
    text: "Ensure your business meets critical industry standards and data protection regulations.",
    href: "/services/compliance-regulatory-advisory"
  },
  {
    img: "https://enhanced.io/wp-content/uploads/2023/03/risk-based-vul-management.jpg",
    hint: "system scan",
    title: "Vulnerability Management",
    text: "Continuously identify, classify, and remediate potential weaknesses in your systems and networks.",
    href: "/services/vulnerability-management"
  },
  {
    img: "https://www.gadgetaccess.com/wp-content/uploads/2023/08/training2-1024x587.jpg",
    hint: "team training",
    title: "Cybersecurity Training",
    text: "Provide on-site and remote training to improve IACS cybersecurity knowledge and build human firewalls.",
    href: "/services/cybersecurity-training"
  },
  {
    img: "https://www.hurix.com/wp-content/uploads/2022/05/penetration-1.jpg",
    hint: "hacker code",
    title: "Penetration Testing",
    text: "Simulate real-world cyber attacks (white/grey box) to identify and address security weaknesses.",
    href: "/services/penetration-testing"
  },
  {
    img: "https://cyberpedia.reasonlabs.com/IMG/on-going%20maintenance.jpg",
    hint: "system lifecycle",
    title: "Operation & Maintenance",
    text: "Ensure optimal performance, security, and compliance of IACS throughout their entire lifecycle.",
    href: "/services/operation-and-maintenance"
  } 
];

const approachSteps = [
  {
    step: "01",
    title: "Identify",
    description: "Understand organizational risks to systems, assets, and data.",
    icon: Search,
    color: "text-green-500",
    borderColor: "border-green-500",
  },
  {
    step: "02",
    title: "Protect",
    description: "Implement safeguards to ensure delivery of critical services.",
    icon: ShieldCheck,
    color: "text-cyan-500",
    borderColor: "border-cyan-500",
  },
  {
    step: "03",
    title: "Detect",
    description: "Discover cybersecurity events in a timely manner.",
    icon: Eye,
    color: "text-blue-500",
    borderColor: "border-blue-500",
  },
  {
    step: "04",
    title: "Respond",
    description: "Take appropriate action after a detected incident.",
    icon: BellRing,
    color: "text-indigo-500",
    borderColor: "border-indigo-500",
  },
  {
    step: "05",
    title: "Recover",
    description: "Restore any capabilities or services that were impaired.",
    icon: Recycle,
    color: "text-purple-500",
    borderColor: "border-purple-500",
  },
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
            <section className="bg-card/50 py-16 lg:py-24">
              <div className="max-w-6xl mx-auto px-4">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
                        Implementing a comprehensive cybersecurity strategy involves a combination of different services tailored to the specific needs and risks of your business. We analyze, design, and maintain robust security postures to protect your most critical assets.
                    </p>
                </div>

                {/* Timeline Wrapper */}
                <div className="relative mb-16">
                    {/* SVG for desktop timeline */}
                    <svg className="hidden md:block absolute top-0 left-0 w-full h-full z-0 overflow-visible" viewBox="0 0 1200 200" preserveAspectRatio="none">
                        <path d="M 120 20 C 240 20, 240 100, 360 100 C 480 160, 480 10, 600 5 C 720 20, 720 160, 840 100 C 960 100, 960 20, 1080 20" stroke="hsl(var(--border))" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                        <path d="M 1080 20 L 1140 10 L 1115 20 L 1140 30 Z" fill="hsl(var(--muted-foreground))" />
                    </svg>

                    {/* Timeline Container */}
                    <div className="relative w-full py-10 md:flex md:justify-between mobile-timeline-container">
                        {approachSteps.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="timeline-item">
                                    <div className={`timeline-circle w-20 h-20 rounded-full border-4 bg-background flex items-center justify-center shadow-md ${item.borderColor}`}>
                                        <Icon className={`w-10 h-10 ${item.color}`} />
                                    </div>
                                    <div className="timeline-content mt-4 md:text-center">
                                        <span className="text-sm font-semibold text-muted-foreground">STEP {item.step}</span>
                                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <br />
                {/* Stats Section */}
                <div className="mt-17 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                        <div className="text-4xl font-bold text-foreground">
                            <CountUp
                                end={10}
                                duration={2.5}
                                enableScrollSpy
                                scrollSpyOnce
                                suffix="+"
                            />
                        </div>
                        <div className="mt-1 text-muted-foreground">Satisfied Customers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-foreground">
                             <CountUp
                                end={15}
                                duration={2.5}
                                enableScrollSpy
                                scrollSpyOnce
                                suffix="+"
                            />
                        </div>
                        <div className="mt-1 text-muted-foreground">Assessed Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-foreground">
                             <CountUp end={22} duration={2.5} enableScrollSpy scrollSpyOnce suffix="+" />
                        </div>
                        <div className="mt-1 text-muted-foreground">Collaborators</div>
                    </div>
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
                            <div className="bg-primary/10 h-16 w-16 rounded-full mx-auto flex items-center justify-center">
                               <ShieldCheck size={32} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mt-6">Industry Experts</h3>
                            <p className="text-gray-300 mt-2">Our team comprises certified professionals with decades of experience in the industrial sector.</p>
                        </div>
                        <div className="p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800">
                           <div className="bg-primary/10 h-16 w-16 rounded-full mx-auto flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <h3 className="text-xl font-semibold mt-6">Tailored Solutions</h3>
                            <p className="text-gray-300 mt-2">We don't use a one-size-fits-all approach. Every solution is customized to your unique environment.</p>
                        </div>
                        <div className="p-8 rounded-xl border border-gray-700 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800">
                             <div className="bg-primary/10 h-16 w-16 rounded-full mx-auto flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
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
                                <span className="text-muted-foreground uppercase text-xs font-semibold tracking-wider">{service.hint}</span>
                                <h4 className="text-xl font-semibold mt-2">{service.title}</h4>
                                <p className="mt-2 text-muted-foreground text-sm">{service.text}</p>
                                <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mt-auto pt-4">
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
