import type { ReactNode } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShieldHalf, Zap } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';

export function Hero({ demoButton }: { demoButton: ReactNode }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll animation="fade-up" className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground font-headline">
            Protecting your digital future with proactive cybersecurity
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Cycraf delivers enterprise-grade threat detection, incident response, and managed security services tailored to your industry. We reduce risk — not productivity.
          </p>
          <div className="mt-2 flex gap-3">
            <Button asChild size="lg" className="shadow hover:translate-y-[-2px] transition-transform">
              <a href="#product">Explore Product</a>
            </Button>
            {demoButton}
          </div>

          <div className="mt-4 flex gap-8 pt-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary"><ShieldHalf /></div>
              <div>
                <div className="text-sm text-muted-foreground">99.99%</div>
                <div className="font-semibold text-foreground">Uptime & Resilience</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10 text-primary"><Zap /></div>
              <div>
                <div className="text-sm text-muted-foreground">Real-time</div>
                <div className="font-semibold text-foreground">Threat Detection</div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-left" className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl transform-gpu hover:scale-105 transition-transform duration-300">
            <Image src="https://placehold.co/700x480.png" alt="cybersecurity dashboard" width={700} height={480} className="w-full object-cover" data-ai-hint="cybersecurity abstract" />
          </div>

          <AnimateOnScroll animation="fade-up" className="absolute -bottom-8 -left-4 md:left-6 bg-card p-4 rounded-lg shadow-lg w-72 border">
            <div className="flex items-center gap-3">
              <Image src="https://placehold.co/48x48.png" alt="analyst avatar" width={48} height={48} className="rounded-full object-cover" data-ai-hint="portrait professional" />
              <div>
                <div className="text-sm font-semibold text-foreground">Cycraf SOC</div>
                <div className="text-xs text-muted-foreground">24/7 security operations center</div>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Real-time alerts, triage, and response by senior analysts.</p>
          </AnimateOnScroll>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
