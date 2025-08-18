
"use client";

import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Phone, Mail, Clock } from 'lucide-react';
import { useState } from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import contactuspic from '@/components/ContactUs.jpg'
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
          {/* Hero Section */}
          <section
          className="relative bg-cover bg-center py-24 text-white"
          style={{ backgroundImage: `url(${contactuspic.src})` }}
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

          <section className="bg-muted/50 py-16 md:py-24">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* Card 1: Our Building */}
      <AnimateOnScroll animation="fade-up" className="info-card">
        <div className="info-card-icon-wrapper">
          <Building2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="info-card-title">Our Buildings</h3>
        <div className="info-card-content">
          <p>France: 125 Av. Gabriel Peri, 95870 Bezons</p>
          <p>Morocco: 192 Av. Soussa, Zohour 2, FES</p>
          <p>Spain: 20 Av. del Mar, 4711 El Ejido Palma</p>
        </div>
      </AnimateOnScroll>

      {/* Card 2: Call Us */}
      <AnimateOnScroll animation="fade-up" className="info-card">
        <div className="info-card-icon-wrapper">
          <Phone className="h-8 w-8 text-primary" />
        </div>
        <h3 className="info-card-title">Call Us</h3>
        <div className="info-card-content">
          <p>France: +33 7 63 09 22 96</p>
          <p>Morocco: +212 7 08 68 86 80</p>
        </div>
      </AnimateOnScroll>

      {/* Card 3: Email */}
      <AnimateOnScroll animation="fade-up" className="info-card">
        <div className="info-card-icon-wrapper">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h3 className="info-card-title">Send it Today</h3>
        <div className="info-card-content">
          <p>contact@cyraf.com</p>
        </div>
      </AnimateOnScroll>

      {/* Card 4: Business Hours */}
      <AnimateOnScroll animation="fade-up" className="info-card">
        <div className="info-card-icon-wrapper">
          <Clock className="h-8 w-8 text-primary" />
        </div>
        <h3 className="info-card-title">Business Hours</h3>
        <div className="info-card-content">
          <p>Open: Sunday – Friday</p>
          <p>Close: Saturday</p>
        </div>
      </AnimateOnScroll>

    </div>
  </div>
</section>

          {/* Contact Form */}
          <div className="py-20 bg-background">
            <AnimateOnScroll animation="zoom-in">
                <section className="p-8 bg-card rounded-lg max-w-4xl mx-auto border">
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
          </div>

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
      </main>
      <Footer />
      <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
