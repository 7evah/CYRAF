import { UserCog, Lightbulb, Handshake, LineChart } from 'lucide-react';
import { ValueCard } from './value-card';

const valuesData = [
  {
    icon: UserCog,
    title: "Expertise",
    desc: "Our team brings decades of combined experience in cybersecurity, offering unparalleled insights and skills."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We stay ahead of threats through continuous research and development of cutting-edge security solutions."
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "We work collaboratively with clients as an extension of their team, building trust and ensuring success."
  },
  {
    icon: LineChart,
    title: "Results",
    desc: "We measure our success by the tangible security outcomes and risk reduction we deliver to our clients."
  }
];

export function Values() {
  return (
    <section className="bg-gradient-to-r from-white to-primary/10 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold font-headline">Our Core Values</h3>
        <p className="mt-2 text-muted-foreground">The principles that guide everything we do</p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuesData.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              desc={value.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
