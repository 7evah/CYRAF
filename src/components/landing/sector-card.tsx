import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StaticImageData } from 'next/image';

interface SectorCardProps {
  img: string | StaticImageData;
  title: string;
  hint: string;
}

export function SectorCard({ img, title, hint }: SectorCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image src={img} alt={title} width={400} height={240} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={hint} />
      </CardHeader>
      <CardContent className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1">Industry-specific solutions</p>
      </CardContent>
    </Card>
  );
}
