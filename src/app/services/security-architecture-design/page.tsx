
"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Layers, Shield, DollarSign, FileText, CheckCircle, BarChart, Wifi, Blocks, ShieldCheck } from "lucide-react";

export default function SecurityArchitectureDesignPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />

      <main>
        {/* Hero Section */}
        <AnimateOnScroll animation="fade-up">
            <section
                className="relative h-[50vh] min-h-[350px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=2070')" }}
                data-ai-hint="security network"
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="inline-flex items-center self-start px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-4">
                        <Layers className="w-4 h-4 mr-2" />
                        Our Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 text-left">Security Architecture Design</h1>
                </div>
            </section>
        </AnimateOnScroll>
        
        {/* Key Benefits Section */}
        <AnimateOnScroll animation="fade-up">
            <section className="bg-muted/50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-foreground">Create High-Value Systems with Secure Design</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">A robust security architecture is the blueprint for resilience, protecting your assets and ensuring long-term stability.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-lg border text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                               <Wifi size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Identify Potential Risks</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Proactively uncover vulnerabilities before they can be exploited.</p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Protect Business & Users</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Safeguard your operations, data, and the trust of your customers.</p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border text-center sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                               <DollarSign size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Avoid Financial Losses</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Prevent catastrophic financial losses from breaches and downtime.</p>
                        </div>
                    </div>
                </div>
            </section>
        </AnimateOnScroll>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Main Details */}
            <div className="lg:col-span-2">
                 <AnimateOnScroll animation="fade-right">
                    <article className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Tailored Architecture for OT & IT Environments</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Operational Technology (OT) Architecture provides a structured framework to clearly define assets, their relationships, and how they interact. By offering a holistic view of the entire OT environment, this architecture ensures all components work together seamlessly, preventing disruptions in one area from negatively impacting others.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our comprehensive assessment begins by thoroughly evaluating your existing OT and security infrastructure to identify gaps, vulnerabilities, and areas for improvement. This provides a clear understanding of your current security posture and serves as the foundation for designing an effective cybersecurity architecture.
                        </p>
                    </article>

                    <article className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900">Proven Architecture Models</h2>
                        <p className="text-muted-foreground mt-4">We leverage a range of proven approaches to create a cybersecurity framework suited to your unique needs.</p>
                        <div className="mt-8 grid sm:grid-cols-2 gap-6">
                            <div className="bg-muted/50 p-6 rounded-lg border"><h3 className="font-semibold text-lg flex items-center gap-2"><Layers className="text-primary"/>Defense in Depth</h3></div>
                            <div className="bg-muted/50 p-6 rounded-lg border"><h3 className="font-semibold text-lg flex items-center gap-2"><ShieldCheck className="text-primary"/>Zero Trust Model</h3></div>
                            <div className="bg-muted/50 p-6 rounded-lg border"><h3 className="font-semibold text-lg flex items-center gap-2"><BarChart className="text-primary"/>Risk-Based Approach</h3></div>
                            <div className="bg-muted/50 p-6 rounded-lg border"><h3 className="font-semibold text-lg flex items-center gap-2"><Blocks className="text-primary"/>Secure by Design</h3></div>
                        </div>
                    </article>
                </AnimateOnScroll>
            </div>

            {/* Right Sidebar */}
            <aside>
                <AnimateOnScroll animation="fade-left">
                    <div className="bg-gray-900 text-white p-8 rounded-lg sticky top-24">
                        <h3 className="text-2xl font-bold mb-6">Key Deliverables</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <FileText className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">System Architecture Docs</h4>
                                    <p className="text-gray-400 text-sm">Detailed documentation of your current and proposed security architecture.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Gap Analysis Report</h4>
                                    <p className="text-gray-400 text-sm">Actionable recommendations based on industry best practices and standards.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <BarChart className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Prioritized Roadmap</h4>
                                    <p className="text-gray-400 text-sm">A clear, step-by-step roadmap for implementing security enhancements.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </AnimateOnScroll>
            </aside>
        </div>

        {/* Call to Action Section */}
        <AnimateOnScroll animation="zoom-in">
             <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=2070')" }} data-ai-hint="team security">
                 <div className="absolute inset-0 bg-gray-900/70"></div>
                 <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                    <h3 className="text-3xl font-bold text-white">Book Your Security Architecture Design Now</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Get in touch to build a resilient and secure framework for your IT and OT environments.</p>
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


    