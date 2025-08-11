import Link from 'next/link';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ variant = 'default' }: { variant?: 'default' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Cycraf homepage">
      <Shield className={cn("w-7 h-7 text-primary")} />
      <span className={cn("text-xl font-bold", textColor)}>
        Cycraf
      </span>
    </Link>
  );
}
