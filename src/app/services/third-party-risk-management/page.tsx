
"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ListChecks, UserCheck, Target, Waypoints } from "lucide-react";

export default function ThirdPartyRiskManagementPage() {
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
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 text-left">Third-Party Risk Management</h1>
                </div>
            </section>
        </AnimateOnScroll>
        
        {/* Key Benefits Section */}
        <AnimateOnScroll animation="fade-up">
            <section className="bg-muted/50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-foreground">Safeguard Your Business from Third-Party Risks</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Our expert analysis identifies vulnerabilities and equips you with actionable insights to strengthen your supply chain.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-card p-8 rounded-lg border">
                            <h3 className="text-lg font-semibold">Risk Identification</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Uncover potential risks and vulnerabilities in your third-party products before they impact your business.</p>
                        </div>
                         <div className="bg-card p-8 rounded-lg border">
                            <h3 className="text-lg font-semibold">Continuous Monitoring</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Stay informed about changes in third-party risk profiles with our ongoing monitoring and assessment services.</p>
                        </div>
                         <div className="bg-card p-8 rounded-lg border">
                            <h3 className="text-lg font-semibold">Compliance Assurance</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Ensure that your third-party partners adhere to regulatory requirements and industry standards.</p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border">
                            <h3 className="text-lg font-semibold">Risk Mitigation</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Develop and implement effective risk mitigation strategies to protect your organization from third-party threats.</p>
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
                        <h2 className="text-3xl font-bold text-gray-900">Understanding Third-Party Risks</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            In an interconnected business world, third-party partnerships are essential for growth and innovation. However, they also introduce new risks to your organization. At Cyraf, we provide comprehensive Third-Party Risk Management services to help you identify, assess, and mitigate risks associated with your external vendors and partners.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our services are designed to give you a clear understanding of the potential cybersecurity risks posed by your partners and vendors. We offer a systematic approach to evaluate and manage these risks, ensuring that your business operations remain secure and compliant.
                        </p>
                    </article>

                    <article className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900">Types of Third-Party Risks</h2>
                        <div className="mt-8 space-y-6">
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Cybersecurity Risk</h3>
                                <p className="text-muted-foreground mt-1">The risk of exposure or loss resulting from a cyberattack, security breach, or other security incidents.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Operational Risk</h3>
                                <p className="text-muted-foreground mt-1">The risk of a third-party causing disruption to the business operations.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Legal, Regulatory, and Compliance Risk</h3>
                                <p className="text-muted-foreground mt-1">The risk of a third-party impacting your compliance with local legislation, regulation, or agreements.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Reputational Risk</h3>
                                <p className="text-muted-foreground mt-1">The risk of negative public opinion due to a third party.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Financial Risk</h3>
                                <p className="text-muted-foreground mt-1">The risk that a third party will have a detrimental impact on the financial success of your organization.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg">Strategic Risk</h3>
                                <p className="text-muted-foreground mt-1">The risk that your organization will fail to meet its business objectives because of a third-party vendor.</p>
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
                                    <p className="text-gray-400 text-sm">Our team is adept at identifying and managing third-party risks across diverse industries.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Target className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Tailored Solutions</h4>
                                    <p className="text-gray-400 text-sm">We customize our services according to your specific needs and risk tolerance.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Waypoints className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Proactive Approach</h4>
                                    <p className="text-gray-400 text-sm">Our focus on proactive risk management helps you stay ahead of potential threats.</p>
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
                    <h3 className="text-3xl font-bold text-white">Book Your Third-Party Risk Assessment Now</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Get in touch to secure your supply chain and partner ecosystem.</p>
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

    