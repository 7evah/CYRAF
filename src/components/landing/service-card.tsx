import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  img: string;
  hint: string;
  title: string;
  text: string;
}

export function ServiceCard({ img, hint, title, text }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-none bg-card/50 text-left">
      <CardHeader className="p-0">
        <Image src={img} alt={title} width={400} height={240} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={hint} />
      </CardHeader>
      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm text-muted-foreground mt-2">{text}</p>
      </div>
    </Card>
  );
}
    