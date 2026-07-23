import { partnerSectionImages } from "@/data/static-data";
import Image from "next/image";

function PartnerSection() {
  return (
    <section className="flex  w-full overflow-hidden px-10 sm:px-8 mt-10 mx-auto">
      <div className="flex animate-marquee gap-10 md:gap-25 items-center justify-center">
        {partnerSectionImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={image.height}
            width={image.width}
          />
        ))}
      </div>
    </section>
  );
}

export default PartnerSection;
