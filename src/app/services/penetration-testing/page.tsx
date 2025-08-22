
"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ListChecks, UserCheck, Target, Waypoints, ShieldCheck, Check } from "lucide-react";

export default function PenetrationTestingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />

      <main>
        {/* Hero Section */}
        <AnimateOnScroll animation="fade-up">
          <section
            className="relative h-[50vh] min-h-[350px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://techsopros.com/wp-content/uploads/2023/10/Penetration-Testing-Phases-1024x512-1.jpeg')" }}
            data-ai-hint="penetration testing"
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="inline-flex items-center self-start px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-4">
                <ListChecks className="w-4 h-4 mr-2" />
                Our Services
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 text-left">Penetration Testing</h1>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-3 gap-12">
          {/* Left Column: Main Details */}
          <div className="lg:col-span-2">
            <AnimateOnScroll animation="fade-right">
              <article className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Penetration Testing Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In an era where cyber threats are constantly evolving, proactive security measures are essential. At Cyraf, we offer comprehensive Penetration Testing services to simulate real-world attacks on your systems, identifying vulnerabilities before they can be exploited by malicious actors. Our expert team is dedicated to helping you fortify your defenses and protect your critical assets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our Penetration Testing services provide a detailed examination of your security posture by emulating the tactics used by cybercriminals. This approach allows us to uncover vulnerabilities that might otherwise go unnoticed, offering you the insights needed to strengthen your defenses and enhance your cybersecurity strategy.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-muted/50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-lg mb-2">Realistic Attack Simulation</h3>
                    <p className="text-muted-foreground text-sm">Experience a thorough assessment of your security defenses against simulated attacks that mimic real-world cyber threats.</p>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-lg mb-2">Detailed Reporting</h3>
                    <p className="text-muted-foreground text-sm">Receive comprehensive reports detailing discovered vulnerabilities, their potential impact, and prioritized remediation strategies.</p>
                  </div>
                </div>
              </article>

              <article className="mt-16 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                <ul className="space-y-4 pt-4">
                  {[
                    { title: "External Network Penetration Testing", description: "Identify vulnerabilities in your external network infrastructure, including firewalls, routers, and web servers, to prevent unauthorized access." },
                    { title: "Internal Network Penetration Testing", description: "Assess your internal network security to detect potential weaknesses that could be exploited by insider threats or compromised systems." },
                    { title: "Web Application Testing", description: "Evaluate the security of your web applications to uncover vulnerabilities such as SQL injection, cross-site scripting (XSS), and more." },
                    { title: "Mobile Application Testing", description: "Test the security of your mobile applications to ensure data integrity and protect sensitive information." },
                    { title: "Wireless Network Testing", description: "Analyze your wireless network security to identify and mitigate risks associated with unauthorized access and data interception." }
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
                      <h4 className="font-semibold">Expert Team</h4>
                      <p className="text-muted-foreground text-sm">Our team of certified cybersecurity professionals brings extensive experience and expertise to every engagement.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Advanced Techniques</h4>
                      <p className="text-muted-foreground text-sm">We utilize the latest tools and methodologies to deliver accurate and reliable results.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Waypoints className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Tailored Solutions</h4>
                      <p className="text-muted-foreground text-sm">We customize our testing services to align with your specific business needs and security objectives.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <br />
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 rounded-lg">
  <h3 className="text-2xl font-bold mb-6">Empowering You To...</h3>
  <ul className="space-y-4">
    {[
      "Improved Security Posture",
      "Regulatory Compliance",
      "Increased Awareness",
      "Protect Business & Users",
      "Avoid Financial Losses"
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
              <h3 className="text-3xl font-bold text-white">Book Your Penetration Testing Now.</h3>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Defend your business against cyber threats with confidence. Contact us today to learn more about our Penetration Testing services and discover how Cyraf can help you secure your digital assets and infrastructure.</p>
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
