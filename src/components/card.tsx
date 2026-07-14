
import type { Card } from "@/data/static-data";
import Image from "next/image";
import Link from "next/link";
import Typography from "./typography/typography";

function Card({ card }: { card: Card }) {
  return (
    <div className="flex flex-col items-center justify-between gap-9 lg:max-w-93.75 bg-white shadow-[0px_4px_15px_0px_#8B8B8B40] rounded-[5px] p-5 md:p-15 hover:scale-103 transition-all duration-300 max-h-145.5">
      <div className="flex flex-col items-center gap-9">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          height={card.image.height}
          width={card.image.width}
        />
        <Typography variant="h5" weight="bold">
          {card.title}
        </Typography>
        <Typography variant="body">{card.description}</Typography>
      </div>
      {card.button && (
        <Link href={card.button.href}>
          <Typography variant="body" weight="bold" className="text-[#22A6FF]">
            {card.button.text}
          </Typography>
        </Link>
      )}
    </div>
  );
}

export default Card;
