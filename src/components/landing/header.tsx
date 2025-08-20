"use client";

import { useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";

export function Header({ onBookDemoClick, isTransparent = false }: { onBookDemoClick: () => void; isTransparent?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#sectors", label: "Sectors" },
    { href: "/#product", label: "Product" },
    { href: "/services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "#careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  // Determine classes based on the isTransparent prop
  const headerClasses = isTransparent
    ? 'bg-transparent'
    : 'backdrop-blur bg-white/70 shadow-sm';
  
  const linkColorClass = isTransparent ? 'text-white' : 'text-foreground';

  // Determine button classes based on the isTransparent prop
  const buttonClasses = isTransparent
    ? 'shadow hover:translate-y-[-2px] transition-transform bg-cyan-600 hover:bg-cyan-700 text-white'
    : ''; // Default button styling will be applied by shadcn/ui's Button component

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* This line is updated to pass the correct variant to the Logo */}
        <Logo variant={isTransparent ? 'light' : 'default'} />

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`transition-colors hover:text-primary ${linkColorClass}`}
              style={{ textShadow: isTransparent ? '0 1px 3px rgba(0,0,0,0.3)' : 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button onClick={onBookDemoClick} size="sm" className={buttonClasses}>Book a Demo</Button>
        </div>
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="toggle menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="p-6">
                <Logo />
                <div className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ))}
                  <Button onClick={() => { onBookDemoClick(); setMobileOpen(false); }} className="mt-2">Book a Demo</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}