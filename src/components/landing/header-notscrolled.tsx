
"use client";

import { useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header({ onBookDemoClick }: { onBookDemoClick: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#sectors", label: "Sectors" },
    { href: "/#product", label: "Product" },
    { href: "/services", label: "Services", isDropdown: true, dropdownItems: [
        { href: "/services/cybersecurity-risk-assessment", label: "Cybersecurity Risk Assessment" },
        { href: "/services/security-architecture-design", label: "Security Architecture Design" },
        { href: "/services/compliance-regulatory-advisory", label: "Compliance & Regulatory Advisory" },
        { href: "/services/cybersecurity-implementation", label: "Cybersecurity Implementation" },
    ]},
    { href: "/#about", label: "About" },
    { href: "#careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm">
  {navLinks.map((link) =>
    link.isDropdown ? (
      <DropdownMenu key={link.label}>
        <div className="flex items-center gap-1">
          <Link
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
          <DropdownMenuTrigger asChild>
            <button className="hover:text-primary transition-colors">
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent>
          {link.dropdownItems?.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    ) : (
      <Link
        key={link.href}
        href={link.href}
        className="hover:text-primary transition-colors"
      >
        {link.label}
      </Link>
    )
  )}
</nav>


        <div className="hidden md:flex items-center gap-2">
          <Button onClick={onBookDemoClick} size="sm">Book a Demo</Button>
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
                    link.isDropdown ? (
                        <div key={link.label}>
                            <Link href={link.href} onClick={() => setMobileOpen(false)} className="font-semibold hover:text-primary transition-colors">{link.label}</Link>
                            <div className="flex flex-col gap-2 mt-2 pl-4">
                                {link.dropdownItems?.map(item => (
                                     <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="hover:text-primary transition-colors">
                                        {item.label}
                                     </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    )
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

    

    