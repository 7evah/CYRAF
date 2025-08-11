import Image from 'next/image';
import Link from 'next/link';
import aboutpic from '../photo-1542744173-8e7e53415bb0.avif'

export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold font-headline">About Cycraf</h3>
          <p className="text-muted-foreground">
            Founded by security practitioners with decades of experience, Cycraf helps organisations modernise their security operations and reduce mean time to remediation.
          </p>
          <Link href="#" className="inline-block font-medium text-primary hover:underline">
            Learn more about our mission
          </Link>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image src={aboutpic} alt="our team in a meeting" width={600} height={400} className="w-full h-auto object-cover" data-ai-hint="team meeting" />
        </div>
      </div>
    </section>
  );
}
