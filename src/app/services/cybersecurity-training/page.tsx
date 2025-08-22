
"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ListChecks, UserCheck, Target, ShieldCheck } from "lucide-react";

export default function CybersecurityTrainingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />

      <main>
        {/* Hero Section */}
        <AnimateOnScroll animation="fade-up">
            <section
                className="relative h-[50vh] min-h-[350px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070')" }}
                data-ai-hint="cybersecurity training"
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="inline-flex items-center self-start px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-4">
                        <ListChecks className="w-4 h-4 mr-2" />
                        Our Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 text-left">Cybersecurity Training</h1>
                </div>
            </section>
        </AnimateOnScroll>
        
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Main Details */}
            <div className="lg:col-span-2">
                <AnimateOnScroll animation="fade-right">
                    <article className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Cybersecurity Training Services</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our Cybersecurity Training is built around practical, hands-on learning and real-world scenarios. We tailor our programs to meet your organization’s specific needs, ensuring that your team learns how to recognize, respond to, and mitigate cyber risks effectively.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            From foundational training for beginners to advanced courses for IT professionals, we cover a wide range of topics to strengthen your internal defenses.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg mb-2">Comprehensive Curriculum</h3>
                                <p className="text-muted-foreground text-sm">We offer training modules that cover everything from basic cybersecurity awareness to advanced defensive techniques.</p>
                            </div>
                            <div className="bg-muted/50 p-6 rounded-lg border">
                                <h3 className="font-semibold text-lg mb-2">Customized Programs</h3>
                                <p className="text-muted-foreground text-sm">Our training is designed to meet the specific needs of your business, whether you’re in finance, healthcare, or any other industry.</p>
                            </div>
                        </div>
                    </article>

                    <article className="mt-16 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Training Programs</h2>
                        <ul className="space-y-4 pt-4">
                            {[
                                { title: "Cybersecurity Awareness Training", description: "Ensure your employees understand common cyber threats such as phishing, social engineering, and malware, and how to avoid them." },
                                { title: "Advanced Security Training", description: "For IT teams, we offer specialized training in areas such as incident response, threat detection, and network security." },
                                { title: "Phishing Simulation", description: "Test your employees’ readiness with simulated phishing attacks and provide targeted training based on the results." },
                                { title: "Compliance Training", description: "Ensure your organization meets industry standards like GDPR, HIPAA, and PCI-DSS through our regulatory-focused training programs." },
                                { title: "Executive Training", description: "Train your leadership team on high-level cybersecurity risks, policy-making, and decision-making strategies to maintain a secure environment." }
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
                                    <h4 className="font-semibold">Expert Instructors</h4>
                                    <p className="text-muted-foreground text-sm">Our trainers are experienced cybersecurity professionals who bring real-world knowledge and insights to every session.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Target className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Tailored Training</h4>
                                    <p className="text-muted-foreground text-sm">We develop customized training programs based on your organization’s size, industry, and specific risks.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <ShieldCheck className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Proven Results</h4>
                                    <p className="text-muted-foreground text-sm">Organizations that have implemented our training programs report a significant decrease in security incidents.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                            <br />
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-lg">
  <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
  <ul className="space-y-4">
    {[
      "Improved Security Practices",
      "Ongoing Support",
      "Protect from threats",
      "Foster a culture of cybersecurity"
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
                    <h3 className="text-3xl font-bold text-white">Book Your Cybersecurity Training Now.</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Empower your workforce to become your first line of defense. Contact Cyraf today to learn more about our Cybersecurity Training Services and find out how we can help you build a security-conscious culture within your organization.</p>
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
