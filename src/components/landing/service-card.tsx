import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  text: string;
}

export function ServiceCard({ icon: Icon, title, text }: ServiceCardProps) {
  return (
    <Card className="text-left bg-card/50 hover:shadow-xl transition-shadow duration-300 border-none">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
