"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Header } from "@/components/landing/header-notscrolled";
import { Footer } from "@/components/landing/footer";
import { DemoModal } from "@/components/landing/demo-modal";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { Shield, Zap, TrendingUp } from "lucide-react";
import jobs from './jobs.json';

export default function CareersPage() {
    const [demoOpen, setDemoOpen] = useState(false);

    return (
        <div className="bg-background text-foreground">
            <Header onBookDemoClick={() => setDemoOpen(true)} />
            <main>
                <section 
                    className="relative overflow-hidden bg-cover bg-center pt-32 pb-20"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070')" }}
                    data-ai-hint="team collaboration"
                >
                    <div className="absolute inset-0 bg-gray-900/60"></div>
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="mb-4 text-4xl font-extrabold text-white md:text-6xl">
                            Build the Future of Security
                        </h1>
                        <p className="mx-auto max-w-3xl text-xl text-gray-200">
                            Join a team of experts dedicated to protecting the world's most critical infrastructure. Your work at Cyraf will have a meaningful and lasting impact.
                        </p>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Why Cyraf?</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We're more than a company; we're a mission-driven team committed to excellence, innovation, and making a difference.</p>
                        </div>
                        <div className="grid gap-10 md:grid-cols-3">
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                                    <Shield className="h-6 w-6 text-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Meaningful Work</h3>
                                <p className="mt-2 text-muted-foreground">Protect vital systems that power communities and economies. Your contributions directly enhance global security and resilience.</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                                   <TrendingUp className="h-6 w-6 text-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Career Growth</h3>
                                <p className="mt-2 text-muted-foreground">We invest in our team's professional development with continuous training, certifications, and opportunities to tackle new challenges.</p>
                            </div>
                            <div className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                                    <Zap className="h-6 w-6 text-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Innovative Culture</h3>
                                <p className="mt-2 text-muted-foreground">Work with cutting-edge technology and a forward-thinking team that thrives on solving complex cybersecurity puzzles.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="openings" className="py-20 bg-muted/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900">Current Openings</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Find your next opportunity and grow with us. We're looking for passionate individuals to join our team.</p>
                        </div>

                        <div className="space-y-6 max-w-4xl mx-auto">
                           {jobs.map(job => (
                                <div key={job.id} className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                                            <p className="mt-1 text-muted-foreground">{job.department} | {job.location} | {job.type}</p>
                                        </div>
                                        <Button asChild className="mt-4 sm:mt-0">
                                            <Link href={`/careers/${job.id}`}>
                                                View Details
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                           ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                        <Image src="https://placehold.co/100x100/E0E7FF/3730A3?text=MT" alt="Marcus Thorne" width={100} height={100} className="mx-auto mb-6 h-24 w-24 rounded-full" data-ai-hint="male professional" />
                        <blockquote className="text-xl text-gray-900 italic">
                            “Working at Cyraf has been an incredible journey. The focus on protecting critical infrastructure means every project is challenging and rewarding. The leadership team truly supports professional growth and empowers us to innovate.”
                        </blockquote>
                        <cite className="mt-6 block font-semibold text-gray-900">Marcus Thorne</cite>
                        <p className="text-muted-foreground">Head of Threat Intelligence</p>
                    </div>
                </section>

                <section className="bg-muted/50 py-20">
                    <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900">Don't See a Role For You?</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                            We are always looking for talented individuals who are passionate about cybersecurity. If you believe you'd be a great fit for our team, we'd love to hear from you.
                        </p>
                        <Button asChild size="lg" variant="outline">
                            <a href="mailto:careers@cyraf.com">
                                Get In Touch
                            </a>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
            <DemoModal isOpen={demoOpen} onOpenChange={setDemoOpen} />
        </div>
    );
}