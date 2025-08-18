import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import LogoIcon from './cropped-Produit_blue.png';
// Add your new white logo import here
import LogoIconLight from './colored-logo.png'; 

export function Logo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  // Determine which logo to display based on the variant
  const logoSrc = variant === 'light' ? LogoIconLight : LogoIcon;

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Cycraf homepage">
      <Image 
        src={logoSrc}
        alt="Cycraf Logo"
        className="w-28 h-auto" // changed h-17 to h-auto for better aspect ratio
        priority
      />
    </Link>
  );
}