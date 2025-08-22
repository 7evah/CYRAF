
"use client";

import { useState } from "react";
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { ListChecks, Wifi, Shield, DollarSign, CheckCircle, FileText, BarChart } from "lucide-react";

const standardsData = {
    'IEC 62443': '<strong>IEC 62443</strong> is a series of international standards from the <strong>International Electrotechnical Commission (IEC)</strong> for the cybersecurity of operational technology (OT) in industrial automation and control systems (IACS). Its primary goal is to establish measures to protect industrial systems, ensuring their safety, reliability, and integrity. It is widely adopted in sectors like energy, transportation, and manufacturing.',
    'TS 50701': '<strong>TS 50701</strong> is a technical specification from the <strong>European Committee for Electrotechnical Standardization (CENELEC)</strong> for cybersecurity in the railway industry. It focuses on securing railway applications, especially in OT systems like signaling, control, and communication networks.',
    'PCI DSS': 'The <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong> ensures that all organizations maintain a secure environment for credit card information. Compliance must be validated annually and is based on six core principles: <ul class="list-disc pl-5 mt-2 space-y-1"><li>Build and maintain a secure network</li><li>Protect cardholder data</li><li>Maintain a vulnerability management program</li><li>Implement strong access control measures</li><li>Regularly monitor and test networks</li><li>Maintain an information security policy</li></ul>',
    'HIPAA': 'The <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong> is a US law ensuring the confidentiality, availability, and integrity of Protected Health Information (PHI). It applies to healthcare providers, clearinghouses, health plans, and business professionals handling PHI.',
    'SOC 2': '<strong>System and Organization Control 2 (SOC 2)</strong> provides guidelines for managing customer data based on five trust principles: safety, availability, processing integrity, secrecy, and privacy. While not required, it is crucial for SaaS and cloud computing vendors.',
    'NYDFS': 'The <strong>NYDFS Cybersecurity Regulation (23 NYCRR 500)</strong>, established in 2017, sets cybersecurity requirements for financial services providers operating in New York. Key principles include risk assessments, documented policies, and appointing a Chief Information Officer (CIO).',
    'GDPR': 'The <strong>General Data Protection Regulation (GDPR)</strong> was enacted by the EU in 2018. It sets standards for organizations that handle data of individuals in the EU, regardless of where the organization is located. It is built on seven principles including lawfulness, fairness, and transparency.',
    'NIST': 'The <strong>National Institute of Standards and Technology (NIST)</strong> promotes innovation and competitiveness through standards. The <strong>NIST 800-53 Risk Management Framework</strong> provides guidelines for information security systems, while the <strong>NIST 800-161</strong> addresses supply chain risk management.',
    'CCPA': 'The <strong>California Consumer Privacy Act (CCPA)</strong> gives California consumers more control over their personal data. It requires organizations to disclose their data privacy practices and grants consumers rights to know, opt-out, and delete their information.',
    'CMMC': 'The <strong>Cybersecurity Maturity Model Certification (CMMC)</strong> requires organizations handling Controlled Unclassified Information (CUI) to implement stringent cybersecurity measures. Compliance, verified by a C3PAO audit, is necessary to bid on U.S. Department of Defense (DoD) contracts.',
    'FISMA': 'The <strong>Federal Information Security Management Act (FISMA)</strong> is a United States federal law that was enacted in 2002 to bolster computer and network security within the federal government and its affiliated contractors. It requires federal agencies to develop, document, and implement an agency-wide program to provide information security for the information and information systems that support the operations and assets of the agency.'
};

type StandardKey = keyof typeof standardsData;

export default function ComplianceRegulatoryAdvisoryPage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStandard, setSelectedStandard] = useState<StandardKey | null>(null);

  const handleOpenModal = (standard: StandardKey) => {
    setSelectedStandard(standard);
    setModalOpen(true);
  };

  return (
    <div className="bg-background text-foreground">
      <Header onBookDemoClick={() => setDemoOpen(true)} />

      <main>
        {/* Hero Section */}
        <AnimateOnScroll animation="fade-up">
            <section
                className="relative h-[50vh] min-h-[350px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=2070')" }}
                data-ai-hint="compliance documents"
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                    <div className="inline-flex items-center self-start px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-4">
                        <ListChecks className="w-4 h-4 mr-2" />
                        Our Services
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 text-left">Compliance & Regulatory Advisory</h1>
                </div>
            </section>
        </AnimateOnScroll>
        
        {/* Key Benefits Section */}
        <AnimateOnScroll animation="fade-up">
            <section className="bg-muted/50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-foreground">Navigate the Complex World of Compliance with Confidence</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Our advisory services ensure your organization remains secure, compliant, and resilient in a changing regulatory landscape.</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-card p-8 rounded-lg border text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                               <Wifi size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Identify Potential Risks</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Proactively uncover compliance gaps and vulnerabilities in your systems.</p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Protect Business & Users</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Safeguard your operations, data, and the trust of your customers through adherence to standards.</p>
                        </div>
                        <div className="bg-card p-8 rounded-lg border text-center sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto text-primary">
                               <DollarSign size={32} />
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Avoid Financial Losses</h3>
                            <p className="text-muted-foreground mt-2 text-sm">Prevent catastrophic financial penalties and losses from non-compliance.</p>
                        </div>
                    </div>
                </div>
            </section>
        </AnimateOnScroll>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Main Details */}
            <div className="lg:col-span-2">
                 <AnimateOnScroll animation="fade-right">
                    <article className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Expert Compliance and Regulatory Advisory</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            No organization is completely immune from a cyberattack, meaning that complying with cybersecurity standards and regulations is paramount. It can be a determining factor in an organization’s ability to achieve success, maintain smooth operations, and uphold security best practices.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our services offer a wide range of support to help your organization comply with the regulations, standards, and laws that govern cybersecurity and critical infrastructure protection. We work closely with your team to ensure your business is not only compliant but also well-positioned to mitigate risks and respond effectively to changes in the regulatory landscape.
                        </p>
                    </article>

                    <article className="mt-16">
                        <h2 className="text-3xl font-bold text-gray-900">Key Standards We Cover</h2>
                        <p className="text-muted-foreground mt-4">Our expertise spans a wide range of critical international and industry-specific regulations.</p>
                        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {Object.keys(standardsData).map(key => (
                                <Button
                                    key={key}
                                    variant="outline"
                                    className="h-auto py-4 text-center justify-center font-semibold"
                                    onClick={() => handleOpenModal(key as StandardKey)}
                                >
                                    {key}
                                </Button>
                            ))}
                             <div className="bg-muted p-4 rounded-lg border text-center flex items-center justify-center">
                                <h3 className="font-semibold text-muted-foreground">& More</h3>
                            </div>
                        </div>
                    </article>
                </AnimateOnScroll>
            </div>

            {/* Right Sidebar */}
            <aside>
                <AnimateOnScroll animation="fade-left">
                    <div className="bg-gray-900 text-white p-8 rounded-lg sticky top-24">
                        <h3 className="text-2xl font-bold mb-6">Our Comprehensive Services</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Regulatory Due Diligence</h4>
                                    <p className="text-gray-400 text-sm">Conducting projects and developing measures to mitigate identified risks.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FileText className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Corporate Governance</h4>
                                    <p className="text-gray-400 text-sm">Drafting policies, regulations, and responsibility frameworks (RACI).</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <BarChart className="flex-shrink-0 h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">License & Permit Assistance</h4>
                                    <p className="text-gray-400 text-sm">Assisting with obtaining and renewing necessary licenses and permits.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </AnimateOnScroll>
            </aside>
        </div>

        {/* Call to Action Section */}
        <AnimateOnScroll animation="zoom-in">
             <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070')" }} data-ai-hint="team security">
                 <div className="absolute inset-0 bg-gray-900/70"></div>
                 <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
                    <h3 className="text-3xl font-bold text-white">Book Your Compliance & Regulation Audit Now</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Get in touch to ensure your organization is fully compliant and prepared for the future.</p>
                    <Button size="lg" className="mt-8 bg-white text-gray-900 hover:bg-gray-200 transform hover:scale-105" onClick={() => setDemoOpen(true)}>Get In Touch</Button>
                </div>
            </section>
        </AnimateOnScroll>
      </main>

      <Footer />
      <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
      
      {/* Standards Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedStandard}</DialogTitle>
          </DialogHeader>
          {selectedStandard && (
            <div
              className="prose prose-sm max-w-none text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: standardsData[selectedStandard] }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
