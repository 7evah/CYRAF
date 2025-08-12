import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import LogoIcon from './cropped-Produit_blue.png';

export function Logo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Cycraf homepage">
      <Image 
        src={LogoIcon}
        alt="Cycraf Logo"
        className="w-28 h-17"
        priority
    
      />
    </Link>
  );
}