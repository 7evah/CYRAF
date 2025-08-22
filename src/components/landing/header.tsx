
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

export function Header({ onBookDemoClick, isTransparent = false }: { onBookDemoClick: () => void; isTransparent?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#sectors", label: "Sectors" },
    { href: "/#product", label: "Product" },
    {
      href: "/services",
      label: "Services",
      isDropdown: true,
      dropdownItems: [
        { href: "/services/cybersecurity-risk-assessment", label: "Cybersecurity Risk Assessment" },
        { href: "/services/security-architecture-design", label: "Security Architecture Design" },
        { href: "/services/compliance-regulatory-advisory", label: "Compliance & Regulatory Advisory" },
      ],
    },
    { href: "/#about", label: "About" },
    { href: "#careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  const headerClasses = isTransparent
    ? 'bg-transparent'
    : 'backdrop-blur bg-white/70 shadow-sm';
  
  const linkColorClass = isTransparent ? 'text-white' : 'text-foreground';

  const buttonClasses = isTransparent
    ? 'shadow hover:translate-y-[-2px] transition-transform bg-cyan-600 hover:bg-cyan-700 text-white'
    : '';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClasses}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Logo variant={isTransparent ? 'light' : 'default'} />

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <DropdownMenu key={link.label}>
                <div className="flex items-center gap-1">
                  {/* Services is now clickable */}
                  <Link
                    href={link.href}
                    className={`transition-colors hover:text-primary ${linkColorClass}`}
                    style={{ textShadow: isTransparent ? '0 1px 3px rgba(0,0,0,0.3)' : 'none' }}
                  >
                    {link.label}
                  </Link>
                  {/* Arrow only triggers dropdown */}
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center transition-colors hover:text-primary ${linkColorClass}`}
                      style={{ textShadow: isTransparent ? '0 1px 3px rgba(0,0,0,0.3)' : 'none' }}
                    >
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
                className={`transition-colors hover:text-primary ${linkColorClass}`}
                style={{ textShadow: isTransparent ? '0 1px 3px rgba(0,0,0,0.3)' : 'none' }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button onClick={onBookDemoClick} size="sm" className={buttonClasses}>
            Book a Demo
          </Button>
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
                  {navLinks.map((link) =>
                    link.isDropdown ? (
                      <div key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="font-semibold hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                        <div className="flex flex-col gap-2 mt-2 pl-4">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="hover:text-primary transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                  <Button
                    onClick={() => {
                      onBookDemoClick();
                      setMobileOpen(false);
                    }}
                    className="mt-2"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    
