
"use client";

import { useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { useI18n, useChangeLocale, useCurrentLocale } from "@/locales/client";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export function Header({ onBookDemoClick }: { onBookDemoClick: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const navLinks = [
    { href: "/", label: t('nav.home') },
    { href: "/#sectors", label: t('nav.sectors') },
    { href: "/#product", label: t('nav.product') },
    { href: "/services", label: t('nav.services') },
    { href: "/#about", label: t('nav.about') },
    { href: "#careers", label: t('nav.careers') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLocale("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLocale("fr")}>Français</DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLocale("ar")}>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button onClick={onBookDemoClick} size="sm">{t('nav.book_demo')}</Button>
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
                   <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="justify-start mt-2">
                        <Globe className="mr-2 h-5 w-5" />
                        Language
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => {changeLocale("en"); setMobileOpen(false);}}>English</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {changeLocale("fr"); setMobileOpen(false);}}>Français</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {changeLocale("ar"); setMobileOpen(false);}}>العربية</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                  <Button onClick={() => { onBookDemoClick(); setMobileOpen(false); }} className="mt-2">{t('nav.book_demo')}</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
