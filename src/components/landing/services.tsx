import { ClipboardCheck, Network, Bug, GraduationCap } from 'lucide-react';
import { ServiceCard } from './service-card';

const servicesData = [
  {
    icon: ClipboardCheck,
    title: "Risk Assessment",
    text: "Identify vulnerabilities and quantify risks to prioritize security investments."
  },
  {
    icon: Network,
    title: "Secure Architecture",
    text: "Design secure systems and networks with defense-in-depth principles."
  },
  {
    icon: Bug,
    title: "Penetration Testing",
    text: "Simulate real-world attacks to uncover security weaknesses before criminals do."
  },
  {
    icon: GraduationCap,
    title: "Awareness Training",
    text: "Security awareness and technical training to build human firewalls."
  }
];

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">Our Security Services</h2>
        <p className="mt-2 text-muted-foreground">Comprehensive security solutions tailored to your organization's needs</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
    </section>
  );
}
