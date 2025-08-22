
"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ListChecks, Shield, Settings, Eye, FileText, UserCheck, Waypoints, Target } from "lucide-react";

export default function CybersecurityImplementationPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />

      <main>
        {/* Hero Section */}
        <AnimateOnScroll animation="fade-up">
            <section
                className="relative h-[50vh] min-h-[350px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://www.e-spincorp.com/wp-content/uploads/2018/01/cybersecurity-implementation.jpg')" }}
                data-ai-hint="cybersecurity implementation"
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="inline-flex items-center self-start px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-4">
                        <ListChecks className="w-4 h-4 mr-2" />
                        Our Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 text-left">Cybersecurity Implementation</h1>
                </div>
            </section>
        </AnimateOnScroll>
        
        {/* Key Benefits Section */}
        <AnimateOnScroll animation="fade-up">
            <section className="bg-muted/50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-foreground">Protect Your Business from Cyber Attacks</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Our expert analysis identifies vulnerabilities and equips you with actionable insights to strengthen your defenses.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-card p-8 rounded-lg border">
                            <h3 className="text-lg font-semibold">Comprehensive Assessment</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Our thorough analysis covers all aspects of your IT environment, identifying vulnerabilities that could expose your business to cyber threats.</p>
                        </div>
                         <div className="bg-card p-8 rounded-lg border">
                            <h3 className="text-lg font-semibold">Customized Recommendations</h3>
                            <p className="text-muted-foreground mt-2 text-sm">We deliver tailored strategies and solutions based on your unique needs and industry requirements.</p>
                        </div>
                         <div className="bg-card p-8 rounded-lg border">
                            <h3 className="text-lg font-semibold">Enhanced Security Posture</h3>
                            <p className="text-muted-foreground mt-2 text-sm">By addressing identified vulnerabilities, we help you build a robust defense against cyberattacks.</p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border">
                            <h3 className="text-lg font-semibold">Increased Awareness</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Our detailed reports and insights empower your team with a deeper understanding of your security landscape.</p>
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
                        <h2 className="text-3xl font-bold text-gray-900">In-Depth Cybersecurity Analysis</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            In the digital age, cybersecurity threats are more sophisticated and pervasive than ever. At Cyraf, we provide comprehensive IT Cybersecurity Analysis services to safeguard your organization’s data and infrastructure. Our expert analysis identifies vulnerabilities and equips you with actionable insights to strengthen your defenses.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our IT Cybersecurity Analysis services are designed to thoroughly assess your systems and networks, uncovering potential weaknesses and providing you with a clear roadmap to enhance your cybersecurity posture. We utilize cutting-edge tools and methodologies to deliver precise and reliable results.
                        </p>
                    </article>

                    <article className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900">Our Implementation Services</h2>
                        <div className="mt-8 space-y-6">
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Vulnerability Assessment</h3>
                                <p className="text-muted-foreground mt-1">Identify and prioritize security weaknesses across your IT infrastructure, including networks, applications, and endpoints.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Penetration Testing</h3>
                                <p className="text-muted-foreground mt-1">Simulate real-world cyberattacks to evaluate the effectiveness of your existing security measures and identify areas for improvement.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Network Security Analysis</h3>
                                <p className="text-muted-foreground mt-1">Analyze your network architecture and configurations to detect vulnerabilities and recommend enhancements.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Application Security Assessment</h3>
                                <p className="text-muted-foreground mt-1">Examine your applications for vulnerabilities and provide strategies to secure them against potential threats.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Security Policy Review</h3>
                                <p className="text-muted-foreground mt-1">Evaluate your current security policies and procedures to ensure they align with best practices and industry standards.</p>
                            </div>
                        </div>
                    </article>
                </AnimateOnScroll>
            </div>

            {/* Right Sidebar */}
            <aside>
                <AnimateOnScroll animation="fade-left">
                    <div className="bg-gray-900 text-white p-8 rounded-lg sticky top-24">
                        <h3 className="text-2xl font-bold mb-6">Why Choose Cyraf?</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <UserCheck className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Expertise and Experience</h4>
                                    <p className="text-gray-400 text-sm">Our team has extensive experience in analyzing and securing complex IT environments.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Target className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Cutting-Edge Technology</h4>
                                    <p className="text-gray-400 text-sm">We leverage the latest tools and techniques to deliver accurate and actionable insights.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Waypoints className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Client-Focused Solutions</h4>
                                    <p className="text-gray-400 text-sm">We work closely with you to deliver solutions that align with your business objectives.</p>
                                </div>
                            </li>
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
                    <h3 className="text-3xl font-bold text-white">Book Your IT Cybersecurity Analysis Now</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Get in touch to secure your business with confidence and protect your organization’s data from cyber threats.</p>
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

    