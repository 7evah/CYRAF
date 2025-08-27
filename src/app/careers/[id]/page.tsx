"use client";

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import jobs from '@/app/careers/jobs.json';
import { MapPin, Clock, Check } from "lucide-react";

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    aboutRole: string;
    responsibilities: string[];
    requiredQualifications: string[];
    preferredQualifications: string[];
    whatWeOffer: string[];
}

export default function JobDetailsPage() {
    const [demoOpen, setDemoOpen] = useState(false);
    const [applicationModalOpen, setApplicationModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const pathname = usePathname();
    const id = pathname.split('/').pop();

    const job = jobs.find(j => j.id === id) as Job | undefined;

    if (!job) {
        return (
            <div>
                <Header onBookDemoClick={() => setDemoOpen(true)} />
                <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">Job Not Found</h1>
                    <p className="mt-4 text-gray-600">The job you are looking for does not exist.</p>
                    <Link href="/careers" className="mt-8 inline-block text-primary hover:underline">
                        &larr; Back to All Openings
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "93933558-9457-4588-91d1-67a8409395f1");
        formData.append("subject", `New Application for ${job.title}`);


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Application Sent!",
                    description: "Thanks for your interest! We'll be in touch shortly.",
                });
                form.reset();
                setApplicationModalOpen(false);
            } else {
                toast({
                    title: "Submission Failed",
                    description: data.message || "Something went wrong. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-background text-foreground">
            <Header onBookDemoClick={() => setDemoOpen(true)} />
            <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="border-b border-gray-200 pb-8 mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">{job.title}</h1>
                    <div className="mt-4 flex items-center space-x-6 text-gray-600">
                        <div className="flex items-center">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span>{job.department} | {job.location}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-2" />
                            <span>{job.type}</span>
                        </div>
                    </div>
                </div>

                <article className="prose prose-lg max-w-none text-muted-foreground">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">About the Role</h2>
                        <p>{job.aboutRole}</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Key Responsibilities</h2>
                        <ul className="space-y-2">
                            {job.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                    
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Required Qualifications</h2>
                         <ul className="space-y-2">
                            {job.requiredQualifications.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Preferred Qualifications</h2>
                         <ul className="space-y-2">
                            {job.preferredQualifications.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">What We Offer</h2>
                         <ul className="space-y-2">
                            {job.whatWeOffer.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </article>

                <div className="mt-12 text-center">
                    <Button size="lg" onClick={() => setApplicationModalOpen(true)}>
                        Apply for this Position
                    </Button>
                </div>
            </main>
            <Footer />

            <Dialog open={applicationModalOpen} onOpenChange={setApplicationModalOpen}>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Apply for {job.title}</DialogTitle>
                        <DialogDescription>We're excited to review your application.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <Input name="name" placeholder="Full Name" required />
                        <Input type="email" name="email" placeholder="Email Address" required />
                        <Input name="position" defaultValue={job.title} readOnly required />
                        <div>
                            <label htmlFor="cv" className="block text-sm font-medium text-foreground mb-1">Upload CV</label>
                            <Input type="file" name="cv" id="cv" required />
                        </div>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Submitting..." : "Submit Application"}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}