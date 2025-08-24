import { SectorCard } from './sector-card';
import healthcarepic from '../istockphoto-1437830105-612x612.jpg'
import tranImg from '../cyber-train-qtsxk0x9ssqalum67msontw1filt6rzowpxsminxd8.jpg'
import smartImg from '../599982-qssvw01s620je08wzdhn9gfcibxymim2pv9bh4z9gs.jpg'
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const sectorsData = [
  {
    img: tranImg,
    hint: "transportation infrastructure",
    title: "Transportation"
  },
  {
    img: healthcarepic,
    hint: "healthcare technology",
    title: "Healthcare"
  },
  {
    img: smartImg,
    hint: "smart city",
    title: "Smart Cities"
  }
];

export function Sectors() {
  return (
    <section id="sectors" className="bg-muted/50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-3xl font-bold font-headline">Industries We Protect</h3>
            <p className="text-muted-foreground mt-2">Specialized security solutions for sector-specific challenges</p>
          </div>
          <Button asChild variant="link" className="text-primary hover:no-underline">
            <Link href="/sectors">
                See More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sectorsData.map((sector, index) => (
            <SectorCard
              key={index}
              img={sector.img}
              title={sector.title}
              hint={sector.hint}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
