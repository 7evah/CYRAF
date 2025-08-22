
"use client";

import { useState } from "react";
import Image from 'next/image';
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ListChecks, UserCheck, ShieldCheck, MapPin, Check } from "lucide-react";

export default function CybersecurityRiskAssessmentPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />

      <main>
        {/* Hero Section */}
        <AnimateOnScroll animation="fade-up">
            <section
            className="relative h-[50vh] min-h-[350px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://mondo.com/wp-content/uploads/2023/02/value-of-a-cybersecurity-risk-assessment-2023.jpg')" }}
            data-ai-hint="cybersecurity assessment"
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="inline-flex items-center self-start px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-4">
                        <ListChecks className="w-4 h-4 mr-2" />
                        Our Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 text-left">Cybersecurity Risk Assessment</h1>
                </div>
            </section>
        </AnimateOnScroll>
        
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Main Details */}
            <div className="lg:col-span-2">
                <AnimateOnScroll animation="fade-right">
                    <article className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">A Comprehensive Approach</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Critical infrastructure systems are becoming increasingly digitalized and interconnected. This heightened connectivity makes them more vulnerable to cyberattacks, as any exposed endpoint can offer threat actors a gateway to access systems, applications, data, and other critical assets.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            To strengthen the security posture of critical infrastructure owners and operators across their entire OT environment, and to comply with local regulations or international standards, it is essential to conduct regular cybersecurity risk assessments. These assessments proactively identify security weaknesses, help prioritize resources, and enable the development of effective strategies to protect against cyber threats.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg mb-2">Industry-Specific Assessments</h3>
                                <p className="text-muted-foreground text-sm">Tailored evaluations designed for the unique needs and threat landscapes of your sector.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg mb-2">Real-World Scenarios</h3>
                                <p className="text-muted-foreground text-sm">We evaluate risks using practical, real-world attack scenarios, not just theoretical checks.</p>
                            </div>
                        </div>
                    </article>

                    <article className="mt-16 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
                        <p className="text-muted-foreground">The Cyraf team will guide you through this process, addressing your organization’s specific needs—whether for a new project or an existing infrastructure.</p>
                        <ul className="space-y-4 pt-4">
                            {[
                                { title: "Context Definition", description: "Understanding and defining a clear context based on your operational needs." },
                                { title: "Asset & Threat Analysis", description: "Detailed asset identification and comprehensive threat analysis." },
                                { title: "Impact Assessment", description: "Comprehensive impact assessments on your critical systems and operations." },
                                { title: "Prioritized Mitigation", description: "Developing prioritized risk mitigation strategies that are meaningful and realistic." },
                                { title: "Compliance Assurance", description: "Ensuring compliance with standards like IEC 62443, IEC 63452, and others." }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">{index + 1}</div>
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </article>
                </AnimateOnScroll>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-12">
                <AnimateOnScroll animation="fade-left">
                    <div className="bg-muted/50 p-8 rounded-lg border">
                        <h3 className="text-2xl font-bold mb-6">Why Choose Cyraf?</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <UserCheck className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Industry Expertise</h4>
                                    <p className="text-muted-foreground text-sm">Deep knowledge of industrial systems and standards.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <ShieldCheck className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Standards-Based Approach</h4>
                                    <p className="text-muted-foreground text-sm">Services based on globally recognized standards like IEC 62443.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Tailored Services</h4>
                                    <p className="text-muted-foreground text-sm">We customize our services to meet your specific needs.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                            <br />
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-lg">
  <h3 className="text-2xl font-bold mb-6">Empowering You To...</h3>
  <ul className="space-y-4">
    {[
      "Improve Security Posture",
      "Ensure Compliance",
      "Manage Business Risk",
      "Enhance Trust & Reputation",
      "Achieve Cost Savings"
    ].map((item) => (
      <li key={item} className="flex items-center gap-3">
        <svg
          className="flex-shrink-0 h-5 w-5 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        {item}
      </li>
    ))}
  </ul>
</div>

                </AnimateOnScroll>
            </aside>
        </div>

        {/* Call to Action Section */}
        <AnimateOnScroll animation="zoom-in">
             <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070')" }} data-ai-hint="team security">
                 <div className="absolute inset-0 bg-gray-900/70"></div>
                 <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                    <h3 className="text-3xl font-bold text-white">Strengthen Your Cyber Resilience</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Contact us today to schedule a comprehensive risk assessment and safeguard your critical operations.</p>
                    <Button size="lg" className="mt-8 bg-white text-gray-900 hover:bg-gray-200 transform hover:scale-105" onClick={() => setDemoOpen(true)}>Request an Assessment</Button>
                </div>
            </section>
        </AnimateOnScroll>
      </main>

      <Footer />
      <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
