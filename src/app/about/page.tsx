
"use client";

import { useState } from "react";
import Image from 'next/image';
import CountUp from 'react-countup';
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Award, Users, Zap, TrendingUp, Target, Globe } from "lucide-react";

const stats = [
    { value: 10, suffix: "+", label: "Critical Sectors", description: "Protecting vital infrastructure" },
    { value: 15, suffix: "+", label: "Years OT Expertise", description: "Deep industrial domain knowledge" },
    { value: 99, suffix: "%", label: "Threat Detection", description: "High-fidelity, actionable alerts" },
    { value: 24, suffix: "/7", label: "Incident Response", description: "Ready to defend your operations" },
];

const values = [
    { 
        icon: Award, 
        title: "Expertise", 
        description: "Our deep knowledge of OT/ICS systems, protocols, and industrial intricacies empowers us to design solutions that are as tough as your operations demand.",
        color: "blue"
    },
    { 
        icon: Users, 
        title: "Partnership", 
        description: "We believe in a high-touch approach, listening carefully and working as an extension of your team to achieve your unique cybersecurity goals.",
        color: "green"
    },
    { 
        icon: Zap, 
        title: "Innovation", 
        description: "We leverage cutting-edge tools and continuous improvement to safeguard your assets against the most sophisticated and evolving cyber threats.",
        color: "orange"
    },
    { 
        icon: TrendingUp, 
        title: "Results", 
        description: "From deep risk analysis to ensuring seamless compliance, our custom security solutions are transparently engineered for lasting impact and operational success.",
        color: "purple"
    },
];

const leadership = [
    { name: "Dr. Alena Petrova", role: "Founder & Principal OT Architect", description: "With a Ph.D. in control systems engineering, Alena is a leading expert in securing critical national infrastructure.", initials: "AP", hint:"female professional" },
    { name: "Marcus Thorne", role: "Head of Threat Intelligence", description: "Specializes in identifying state-sponsored threats targeting industrial environments and developing proactive defense strategies.", initials: "MT", hint: "male professional" },
    { name: "Javier Castillo", role: "Director of Incident Response", description: "A certified GICSP and former ICS operator, Javier leads our rapid response team to contain and mitigate threats in live operational settings.", initials: "JC", hint: "male professional" },
    { name: "Sofia Lin", role: "Compliance & Risk Lead", description: "Expert in navigating complex regulatory landscapes like NERC CIP and ISA/IEC 62443 for our clients.", initials: "SL", hint: "female professional" },
];

const certifications = [ "GICSP", "GRID", "CISSP", "CISM", "ISA/IEC 62443 Expert", "NERC CIP Certified" ];

export default function AboutPage() {
    const [demoOpen, setDemoOpen] = useState(false);

    return (
        <div className="bg-background text-foreground">
            <Header onBookDemoClick={() => setDemoOpen(true)} />
            <main>
                {/* Hero Section */}
                <section 
                    className="relative overflow-hidden bg-cover bg-center pt-32 pb-20" 
                    style={{ backgroundImage: "url('https://www.intel.com/content/dam/www/central-libraries/us/en/images/2025-03/adobestock-748460672-business-it-solutions.jpg')" }}
                    data-ai-hint="business it solutions"
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <AnimateOnScroll animation="fade-up" className="mb-16 text-center">
                            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                                Securing Industrial Environments
                                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    & Critical Infrastructure
                                </span>
                            </h1>
                            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-200">
                                Cyraf is a premier boutique cybersecurity firm delivering a tailored, high-touch approach to protect complex Operational Technology (OT) and Industrial Control Systems (ICS).
                            </p>
                        </AnimateOnScroll>

                        {/* Stats Section */}
                        <AnimateOnScroll animation="fade-up" className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {stats.map(stat => (
                                <div key={stat.label} className="text-center">
                                    <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
                                        <CountUp end={stat.value} duration={3} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
                                    </div>
                                    <div className="mb-1 font-semibold text-white">{stat.label}</div>
                                    <div className="text-sm text-gray-300">{stat.description}</div>
                                </div>
                            ))}
                        </AnimateOnScroll>
                    </div>
                </section>

                {/* Mission & Approach Section */}
                <section className="bg-white py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-16 lg:grid-cols-2">
                             <AnimateOnScroll animation="fade-right">
                                <div>
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h2>
                                    <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                                        To protect the world's most critical infrastructure by combining deep cybersecurity expertise with tailored solutions. We help secure your business through deep risk analysis, cutting-edge tools, and a commitment to continuous improvement.
                                    </p>
                                    <div className="flex items-center text-primary">
                                        <Target className="mr-2 h-5 w-5"/>
                                        <span className="font-semibold">Focused on Your Operational Success</span>
                                    </div>
                                </div>
                             </AnimateOnScroll>
                             <AnimateOnScroll animation="fade-left">
                                <div>
                                    <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Approach</h2>
                                    <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                                        As a boutique firm, we deliver a high-touch, tailored approach. Our process is transparent and we listen carefully to our clients, allowing us to respond to unique needs with precision and a deep commitment to protecting your most vital assets.
                                    </p>
                                    <div className="flex items-center text-green-600">
                                        <Globe className="mr-2 h-5 w-5"/>
                                        <span className="font-semibold">Tailored Solutions, Global Impact</span>
                                    </div>
                                </div>
                             </AnimateOnScroll>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-muted/30">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <AnimateOnScroll animation="fade-up" className="mb-16 text-center">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">What Sets Us Apart</h2>
                            <p className="mx-auto max-w-3xl text-xl text-gray-600">
                                Our core values guide everything we do, ensuring we deliver unparalleled security solutions for the most demanding environments.
                            </p>
                        </AnimateOnScroll>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <AnimateOnScroll animation="fade-up" key={value.title} style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-300 h-full">
                                            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-${value.color}-100`}>
                                                <Icon className={`h-8 w-8 text-${value.color}-600`} />
                                            </div>
                                            <h3 className="mb-4 text-2xl font-bold text-gray-900">{value.title}</h3>
                                            <p className="text-gray-600">{value.description}</p>
                                        </div>
                                    </AnimateOnScroll>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Leadership Team Section */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <AnimateOnScroll animation="fade-up" className="mb-16 text-center">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">Leadership Team</h2>
                            <p className="mx-auto max-w-3xl text-xl text-gray-600">
                                Meet the industrial cybersecurity experts leading our mission to protect critical infrastructure worldwide.
                            </p>
                        </AnimateOnScroll>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {leadership.map((member, index) => (
                                <AnimateOnScroll animation="fade-up" key={member.name} style={{ animationDelay: `${index * 100}ms` }}>
                                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-lg h-full">
                                        <Image src={`https://placehold.co/128x128/E0E7FF/3730A3?text=${member.initials}`} alt={member.name} width={128} height={128} className="mx-auto mb-6 h-32 w-32 rounded-full" data-ai-hint={member.hint} />
                                        <h3 className="mb-1 text-xl font-bold text-gray-900">{member.name}</h3>
                                        <p className="mb-4 text-primary">{member.role}</p>
                                        <p className="text-sm text-gray-600">{member.description}</p>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </div>
                </section>

                 {/* Certifications Section */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <AnimateOnScroll animation="fade-up" className="mb-12 text-center">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900">Certifications & Expertise</h2>
                            <p className="mx-auto max-w-3xl text-xl text-gray-600">
                                Our team holds industry-leading certifications specific to industrial control systems and operational technology security.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="zoom-in" className="flex flex-wrap justify-center gap-4">
                            {certifications.map(cert => (
                                <div key={cert} className="rounded-full bg-primary/10 px-6 py-3 font-medium text-primary-600">{cert}</div>
                            ))}
                        </AnimateOnScroll>
                    </div>
                </section>


                {/* CTA Section */}
                <AnimateOnScroll animation="zoom-in">
                    <section 
                        className="relative py-20 bg-cover bg-center" 
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070')" }}
                        data-ai-hint="team security"
                    >
                        <div className="absolute inset-0 bg-gray-900/70"></div>
                        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                            <h3 className="text-3xl font-bold text-white">Check If Your Business is Covered With Us</h3>
                            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Contact us today to learn more about our tailored cybersecurity solutions for your industry.</p>
                            <Button size="lg" className="mt-8 bg-white text-gray-900 hover:bg-gray-200 transform hover:scale-105" onClick={() => setDemoOpen(true)}>Get In Touch</Button>
                        </div>
                    </section>
                </AnimateOnScroll>
            </main>
            <Footer />
            <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
        </div>
    );
}
