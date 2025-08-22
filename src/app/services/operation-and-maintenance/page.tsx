
"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ListChecks, Wifi, Shield, DollarSign, UserCheck, Target, Waypoints, FileText, CheckCircle, BarChart } from "lucide-react";

export default function OperationAndMaintenancePage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />

      <main>
        {/* Hero Section */}
        <AnimateOnScroll animation="fade-up">
            <section
                className="relative h-[50vh] min-h-[350px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070')" }}
                data-ai-hint="team meeting"
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="inline-flex items-center self-start px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-4">
                        <ListChecks className="w-4 h-4 mr-2" />
                        Our Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 text-left">Operation & Maintenance</h1>
                </div>
            </section>
        </AnimateOnScroll>
        
        {/* Key Benefits Section */}
        <AnimateOnScroll animation="fade-up">
            <section className="bg-muted/50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-foreground">Define Optimal Operations & Maintenance Procedures</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Ensure the optimal performance, security, and compliance of your IACS throughout their entire lifecycle.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-lg border text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                               <Wifi size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Identify Potential Risks</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Continuously monitor and identify emerging threats to your systems.</p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Protect Business & Users</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Maintain a robust security posture to safeguard your operations and stakeholders.</p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border text-center sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                               <DollarSign size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Avoid Financial Losses</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Prevent downtime and compliance penalties that lead to catastrophic financial losses.</p>
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
                        <h2 className="text-3xl font-bold text-gray-900">Operation & Maintenance Services</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            In an interconnected business world, third-party partnerships are essential for growth and innovation. However, they also introduce new risks to your organization. At Cyraf, we provide comprehensive Third-Party Risk Management services to help you identify, assess, and mitigate risks associated with your external vendors and partners.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                             Our Third-Party Risk Management services are designed to give you a clear understanding of the potential cybersecurity risks posed by your partners and vendors. We offer a systematic approach to evaluate and manage these risks, ensuring that your business operations remain secure and compliant.
                        </p>
                    </article>

                    <article className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                        <div className="mt-8 space-y-6">
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Vendor Risk Assessment</h3>
                                <p className="text-muted-foreground mt-1">Evaluate the security posture of your vendors’ product based on cybersecurity standard such as IEC 62443-4-2 to identify and address potential non-compliance and attack vectors in their operations.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Cyber Due Diligence and Onboarding</h3>
                                <p className="text-muted-foreground mt-1">Conduct thorough due diligence during the onboarding process to ensure your partners meet your security and compliance standards and provide assurance of compliance on system level 62443-3-3.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Contractual Review</h3>
                                <p className="text-muted-foreground mt-1">Analyze and recommend improvements to contracts and service level agreements (SLAs) to ensure adequate risk protection.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Ongoing Monitoring</h3>
                                <p className="text-muted-foreground mt-1">Continuously monitor third-party activities and risk levels to promptly address any emerging threats.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Incident Response Planning</h3>
                                <p className="text-muted-foreground mt-1">Develop and implement incident response plans to effectively manage third-party security incidents.</p>
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
                                    <h4 className="font-semibold">Expert Analysis</h4>
                                    <p className="text-gray-400 text-sm">Our team of experienced professionals is adept at identifying and managing third-party risks across diverse industries.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Target className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Tailored Solutions</h4>
                                    <p className="text-gray-400 text-sm">We work closely with your organization to customize our services according to your specific needs and risk tolerance.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Waypoints className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Proactive Approach</h4>
                                    <p className="text-gray-400 text-sm">Our focus on proactive risk management helps you stay ahead of potential threats and maintain business continuity.</p>
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
                    <h3 className="text-3xl font-bold text-white">Book Your Operation & Maintenance Audit Now</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Protect your business from the risks posed by third-party vendors and partners. Contact us today to learn more about our Third-Party Risk Management services.</p>
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
