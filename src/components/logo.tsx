import { ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
        <ShieldAlert className="w-6 h-6" />
      </div>
      <div>
        <div className={cn("font-semibold", variant === 'dark' ? 'text-foreground' : 'text-primary-foreground')}>Cycraf Security</div>
        <div className={cn("text-xs", variant === 'dark' ? 'text-muted-foreground' : 'text-gray-300')}>Enterprise Cyber Defence</div>
      </div>
    </div>
  );
}
