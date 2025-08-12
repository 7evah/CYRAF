import Link from 'next/link';
import { Logo } from '@/components/logo';
import Image from 'next/image';
import LogoIcon from '../colored-logo.png'
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Cycraf homepage">
      <Image 
        src={LogoIcon}
        alt="Cycraf Logo"
        className="w-28 h-17"
        width={112} // w-28 in pixels
        height={68} // h-17 (close to ratio, adjust as needed)
        priority // loads faster
    
      />
    </Link>
          <p className="text-sm text-gray-400">We secure organisations with a blend of technology, process and people.</p>
        </div>

        <div>
          <div className="font-semibold text-white">Quick links</div>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="#sectors" className="hover:text-white transition-colors">Sectors</Link></li>
            <li><Link href="#product" className="hover:text-white transition-colors">Product</Link></li>
            <li><Link href="#careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold text-white">Contact</div>
          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <p>hello@cycraf.com</p>
            <p>+212 6 12 34 56 78</p>
            <p>Casablanca, Morocco</p>
          </div>

          <div className="mt-4 flex items-center gap-4 text-gray-300">
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © {currentYear} Cycraf Security. All rights reserved.
      </div>
    </footer>
  );
}
