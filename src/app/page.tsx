"use client";

import { useState, useEffect, type ReactNode } from "react";
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
import { cn } from "@/lib/utils";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DemoButton = ({
    children,
    variant = "default",
    className, // Added className to allow style overrides
  }: {
    children: ReactNode;
    variant?: "default" | "outline" | "secondary" | "ghost" | "link";
    className?: string;
  }) => (
    <Button
      onClick={() => setDemoOpen(true)}
      variant={variant}
      size="lg"
      className={cn(
        "shadow hover:translate-y-[-2px] transition-transform", // matches primary button hover
        variant === "outline" &&
          "border-primary text-primary hover:bg-primary/10 hover:text-black hover:border-black",
        className // Apply passed-in className
      )}
    >
      {children}
    </Button>
  );

  // The header is transparent only when the user has NOT scrolled down.
  const isHeaderTransparent = !isScrolled;

  return (
    <div className="min-h-screen font-sans text-foreground">
      {/* The 'isTransparent' prop is passed to the Header */}
      <Header onBookDemoClick={() => setDemoOpen(true)} isTransparent={isHeaderTransparent} />
      <main>
        <Hero 
          demoButton={
            // Custom classes are passed to the DemoButton for visibility on the dark hero
            <DemoButton 
              variant="outline"
              className="border-slate-600 text-slate-900 hover:bg-slate-800 hover:text-white"
            >
              Book a Demo
            </DemoButton>
          } 
        />
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