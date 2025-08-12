
"use client";

import { useState, type ReactNode } from "react";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Services } from "@/components/landing/services";
import { Sectors } from "@/components/landing/sectors";
import { Platform } from "@/components/landing/platform";
import { Values } from "@/components/landing/values";
import { About } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  const DemoButton = ({ children, variant = "default" }: { children: ReactNode, variant?: "default" | "outline" | "secondary" | "ghost" | "link" }) => (
    <Button
      onClick={() => setDemoOpen(true)}
      variant={variant === "outline" ? "outline" : "default"}
      className={variant === 'outline' ? "border-primary text-primary hover:bg-primary/10" : ""}
      size="lg"
    >
      {children}
    </Button>
  );

  return (
    <div className="min-h-screen font-sans text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />
      <main>
        <Hero demoButton={<DemoButton variant="outline">Book a Demo</DemoButton>} />
        <AnimateOnScroll animation="fade-up"><Services /></AnimateOnScroll>
        <AnimateOnScroll animation="fade-up"><Sectors /></AnimateOnScroll>
        <AnimateOnScroll animation="fade-up"><Platform demoButton={<DemoButton>Book a demo</DemoButton>} /></AnimateOnScroll>
        <AnimateOnScroll animation="fade-up"><Values /></AnimateOnScroll>
        <AnimateOnScroll animation="fade-up"><About /></AnimateOnScroll>
      </main>
      <Footer />
      <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
