import { statsCard, statsSectionImage } from "@/data/static-data";
import Image from "next/image";
import Typography from "./typography/typography";

function StatsSection() {
  return (
    <section className="max-w-292.5 w-full flex flex-col-reverse md:flex-row py-4 justify-between items-center px-10 sm:px-8 mx-auto mt-10">
      <div>
        <Image
          src={statsSectionImage.src}
          alt={statsSectionImage.alt}
          height={statsSectionImage.height}
          width={statsSectionImage.width}
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {statsCard.map((card, index) => (
          <div key={index} className="flex flex-col gap-8.75">
            <Typography variant="h3" weight="bold">
              {card.title}
            </Typography>
            <Typography variant="body">{card.description}</Typography>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
