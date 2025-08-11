import { SectorCard } from './sector-card';

const sectorsData = [
  {
    img: "https://placehold.co/600x400.png",
    hint: "transportation infrastructure",
    title: "Transportation"
  },
  {
    img: "https://placehold.co/600x400.png",
    hint: "healthcare technology",
    title: "Healthcare"
  },
  {
    img: "https://placehold.co/600x400.png",
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
          <div className="text-sm text-muted-foreground shrink-0">Trusted by leading organizations</div>
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
