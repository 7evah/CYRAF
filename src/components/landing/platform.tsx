import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Platform({ demoButton }: { demoButton: ReactNode }) {
  return (
    <section id="product" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold font-headline">The Cycraf Platform</h3>
          <p className="text-muted-foreground">
            A single pane of glass for threat detection, risk scoring, and incident orchestration. Tailored rules, easy integrations, and enterprise scalability.
          </p>

          <ul className="space-y-2 text-foreground list-disc list-inside">
            <li>Unified security telemetry & correlation</li>
            <li>Automated playbooks & response</li>
            <li>Out-of-the-box compliance reporting</li>
          </ul>

          <div className="mt-2 flex items-center gap-4">
            {demoButton}
            <Link href="#" className="text-sm font-medium text-primary hover:underline">
              Request pricing
            </Link>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg transform-gpu hover:scale-105 transition-transform duration-300">
          <Image src="https://placehold.co/700x450.png" alt="platform interface" width={700} height={450} className="w-full h-auto object-cover" data-ai-hint="dashboard analytics" />
        </div>
      </div>
    </section>
  );
}
