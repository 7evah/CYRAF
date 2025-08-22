
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const servicesData = [
  {
    img: "https://www.getgsi.com/hubfs/GSI%20Website%20Assets/Cybersecurity%20Assessments.png",
    hint: "security audit",
    title: "Cybersecurity Risk Assessment",
    text: "Identify vulnerabilities and quantify risks to prioritize security investments wisely and effectively.",
    href: "/services/cybersecurity-risk-assessment"
  },
  {
    img: "https://www.compuquip.com/hubfs/images/blog-images/building-a-strong-enterprise-security-architecture-framework.jpg",
    hint: "network diagram",
    title: "Security Architecture Design",
    text: "Design secure IT/OT infrastructure to protect against threats using different approaches like Defense-in-Depth.",
    href: "/services/security-architecture-design"
  },
  {
    img: "https://govciomediaresearch.imgix.net/wp-content/uploads/2023/05/1000x650px_new_measures_put_cybersecurity_shutterstock_2137304159.jpg",
    hint: "firewall configuration",
    title: "Cybersecurity Implementation",
    text: "Implement & update protective measures such as encryption, firewalls, authentication, and intrusion detection.",
    href: "/services/cybersecurity-implementation"
  },
  {
    img: "https://www.kiteworks.com/wp-content/uploads/2022/01/Third-party-risk-management-glossary.webp",
    hint: "vendor security",
    title: "Third-Party Risk Management",
    text: "Assess and manage cybersecurity risks associated with your third-party vendors and partners.",
    href: "#"
  },
  {
    img: "https://atcbiocides.com/wp-content/uploads/2021/11/regulatory-compliance.jpg",
    hint: "compliance checklist",
    title: "Compliance and Regulatory Advisory",
    text: "Ensure your business meets critical industry standards and data protection regulations.",
    href: "/services/compliance-regulatory-advisory"
  },
  {
    img: "https://enhanced.io/wp-content/uploads/2023/03/risk-based-vul-management.jpg",
    hint: "system scan",
    title: "Vulnerability Management",
    text: "Continuously identify, classify, and remediate potential weaknesses in your systems and networks.",
    href: "#"
  },
  {
    img: "https://www.gadgetaccess.com/wp-content/uploads/2023/08/training2-1024x587.jpg",
    hint: "team training",
    title: "Cybersecurity Training",
    text: "Provide on-site and remote training to improve IACS cybersecurity knowledge and build human firewalls.",
    href: "#"
  },
  {
    img: "https://www.hurix.com/wp-content/uploads/2022/05/penetration-1.jpg",
    hint: "hacker code",
    title: "Penetration Testing",
    text: "Simulate real-world cyber attacks (white/grey box) to identify and address security weaknesses.",
    href: "#"
  }
];

export function SwiperServices() {
  return (
    <>
      {/* This style tag reduces the size of the navigation arrows */}
      <style>
        {`
          :root {
            --swiper-navigation-size: 28px;
          }
        `}
      </style>
      {/* On mobile/tablet, section is contained. On desktop (lg), it becomes full-width. */}
      <section id="swiper-services" className="max-w-7xl mx-auto px-6 py-20 lg:max-w-none lg:px-0 lg:overflow-hidden">
        {/* Container for centered text on all screen sizes */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-headline">Our Security Services</h2>
          <p className="mt-2 text-muted-foreground">
            Comprehensive security solutions tailored to your organization's needs
          </p>
        </div>

        {/* The Swiper component */}
        <div className="mt-12">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper !pb-12"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 50,
              },
            }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-card rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.15)] border border-border flex flex-col h-full overflow-hidden transition-transform transform hover:-translate-y-2 duration-300 ease-in-out">
                  {/* Image Section */}
                  <div className="card-image">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="card-content p-6 flex flex-col flex-grow">
  <span className="card-hint text-muted-foreground uppercase text-xs font-semibold tracking-wider">
    {service.hint}
  </span>
  <h4 className="card-title text-accent-color text-xl font-semibold mt-2 line-clamp-1">
    {service.title}
  </h4>
  <p className="card-text text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2">
    {service.text}
  </p>
  <div className="card-footer mt-auto pt-4">
    <Link
      href={service.href}
      className="card-link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
    >
      See More <ArrowRight size={16} />
    </Link>
  </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
        </section>
    </>
  );
}
    

    