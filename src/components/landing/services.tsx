import { ServiceCard } from './service-card';
import Image from 'next/image';

const servicesData = [
    {
      img: "https://www.getgsi.com/hubfs/GSI%20Website%20Assets/Cybersecurity%20Assessments.png",
      hint: "security audit",
      title: "Cybersecurity Risk Assessment",
      text: "Identify vulnerabilities and quantify risks to prioritize security investments wisely and effectively."
    },
    {
      img: "https://www.compuquip.com/hubfs/images/blog-images/building-a-strong-enterprise-security-architecture-framework.jpg",
      hint: "network diagram",
      title: "Security Architecture Design",
      text: "Design secure IT/OT infrastructure to protect against threats using different approaches like Defense-in-Depth."
    },
    {
      img: "https://govciomediaresearch.imgix.net/wp-content/uploads/2023/05/1000x650px_new_measures_put_cybersecurity_shutterstock_2137304159.jpg",
      hint: "firewall configuration",
      title: "Cybersecurity Implementation",
      text: "Implement & update protective measures such as encryption, firewalls, authentication, and intrusion detection."
    },
    {
      img: "https://www.kiteworks.com/wp-content/uploads/2022/01/Third-party-risk-management-glossary.webp",
      hint: "vendor security",
      title: "Third-Party Risk Management",
      text: "Assess and manage cybersecurity risks associated with your third-party vendors and partners."
    },
    {
      img: "https://atcbiocides.com/wp-content/uploads/2021/11/regulatory-compliance.jpg",
      hint: "compliance checklist",
      title: "Compliance and Regulatory Advisory",
      text: "Ensure your business meets critical industry standards and data protection regulations."
    },
    {
      img: "https://enhanced.io/wp-content/uploads/2023/03/risk-based-vul-management.jpg",
      hint: "system scan",
      title: "Vulnerability Management",
      text: "Continuously identify, classify, and remediate potential weaknesses in your systems and networks."
    },
    {
      img: "https://www.gadgetaccess.com/wp-content/uploads/2023/08/training2-1024x587.jpg",
      hint: "team training",
      title: "Cybersecurity Training",
      text: "Provide on-site and remote training to improve IACS cybersecurity knowledge and build human firewalls."
    },
    {
      img: "https://www.hurix.com/wp-content/uploads/2022/05/penetration-1.jpg",
      hint: "hacker code",
      title: "Penetration Testing",
      text: "Simulate real-world cyber attacks (white/grey box) to identify and address security weaknesses."
    }/* ,
    {
      img: "https://placehold.co/600x400.png",
      hint: "system lifecycle",
      title: "Operation & Maintenance",
      text: "Ensure optimal performance, security, and compliance of IACS throughout their entire lifecycle."
    } */
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
            img={service.img}
            hint={service.hint}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>
    </section>
  );
}
    