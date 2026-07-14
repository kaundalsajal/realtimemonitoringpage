import { partnerSectionImages } from "@/data/static-data";
import Image from "next/image";

function PartnerSection() {
  return (
    <section className="flex max-w-292.5 w-full overflow-hidden gap-25 items-center justify-center animate-marquee px-10 sm:px-8 mt-10 mx-auto">
      {partnerSectionImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          height={image.height}
          width={image.width}
        />
      ))}
    </section>
  );
}

export default PartnerSection;
