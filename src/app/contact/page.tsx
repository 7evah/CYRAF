
"use client";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Phone, Mail, Clock } from 'lucide-react';
import { useState } from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

// Define props to satisfy Next.js page component signature
interface ContactPageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function Contact({ params, searchParams }: ContactPageProps) {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background">
      <Header onBookDemoClick={() => setDemoOpen(true)} />
      <main>
        <div className="bg-gray-100 dark:bg-gray-900">
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center py-24 text-white"
            style={{ backgroundImage: "url('https://placehold.co/1200x400.png')" }}
            data-ai-hint="contact communication"
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative max-w-7xl mx-auto px-6 text-center">
              <AnimateOnScroll animation="fade-up">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                  We’re here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </AnimateOnScroll>
            </div>
          </section>

          {/* Info Blocks */}
          <section className="grid md:grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
            <AnimateOnScroll animation="fade-up" className="bg-card p-6 rounded-lg shadow-lg text-card-foreground">
              <Building2 className="text-primary text-3xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Our Building</h3>
              <p>France: 125 Avenue Gabriel Peri, 95870 Bezons</p>
              <p>Morocco: Avenue Soussa n°192 Zohour 2 FES</p>
              <p>Spain: Avenida del Mar,20, 4711 El Ejido Palma, ES 07100</p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" className="bg-card p-6 rounded-lg shadow-lg text-card-foreground" style={{ animationDelay: '100ms' }}>
              <Phone className="text-primary text-3xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p>France: +33 7 63 09 22 96</p>
              <p>Morocco: + 212 7 08 68 86 80</p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" className="bg-card p-6 rounded-lg shadow-lg text-card-foreground" style={{ animationDelay: '200ms' }}>
              <Mail className="text-primary text-3xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Send it Today</h3>
              <p>contact@cyraf.com</p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" className="bg-card p-6 rounded-lg shadow-lg text-card-foreground" style={{ animationDelay: '300ms' }}>
              <Clock className="text-primary text-3xl mb-4" />
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p>Open: Sunday – Friday</p>
              <p>Close: Saturday</p>
            </AnimateOnScroll>
          </section>

          {/* Contact Form */}
          <AnimateOnScroll animation="zoom-in">
            <section className="p-8 bg-card rounded-lg max-w-4xl mx-auto mb-16">
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Company Name *</label>
                  <Input
                    type="text"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-semibold">First Name *</label>
                    <Input
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">Last Name *</label>
                    <Input
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Email *</label>
                  <Input
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Subject *</label>
                  <Select required>
                      <SelectTrigger>
                          <SelectValue placeholder="- Please select -" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="risk-assessment">Risk Assessment</SelectItem>
                          <SelectItem value="architecture">Architecture</SelectItem>
                          <SelectItem value="pen-testing">Pen-Testing</SelectItem>
                          <SelectItem value="training">Training</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold">Please tell us more! *</label>
                  <Textarea
                    rows={5}
                    required
                  ></Textarea>
                </div>

                <Button
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </section>
          </AnimateOnScroll>

          {/* Google Map */}
          <section className="p-8 max-w-7xl mx-auto">
            <iframe
              title="Cyraf Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.636012111275!2d-4.9932!3d34.02088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b8c3b5a0a47%3A0x5e79a3a9f79a3f4!2sR%C3%A9sidence%20Zohour%20II!5e0!3m2!1sen!2sma!4v1694567890123!5m2!1sen!2sma"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </section>
        </div>
      </main>
      <Footer />
      <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
