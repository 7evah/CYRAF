import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export function ValueCard({ icon: Icon, title, desc }: ValueCardProps) {
  return (
    <Card className="text-center shadow-lg bg-card">
      <CardHeader className="items-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
          <Icon className="w-7 h-7" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
}
