import { backgroundImage, heroContent, heroImage } from "@/data/static-data";
import Image from "next/image";
import Typography from "./typography/typography";
import Button from "./ui/button";

function Hero() {
  return (
    <section className="max-w-292.5 w-full flex flex-col-reverse md:flex-row mt-5 py-4 justify-between items-center px-10 sm:px-8 mx-auto">
      <div className="w-full md:w-1/2 md:max-w-[400] flex flex-col gap-12.5">
        <Typography variant="h3" weight="bold" color="white">
          {heroContent.title}
        </Typography>
        <Typography variant="body-lg" color="white">
          {heroContent.description}
        </Typography>
        <div className="flex flex-col sm:flex-row gap-4.75">
          <Button
            variant="filled"
            className="bg-linear-to-b from-[#FF5D00] to-[#FF9400] py-1.5 px-3 sm:py-2.5 sm:px-9.25 "
          >
            <Typography variant="button" weight="bold" color="white">
              {heroContent.button1.text}
            </Typography>
          </Button>
          <Button
            variant="outline"
            className="py-1.5 px-3 sm:py-2.5 sm:px-9.25"
          >
            <Typography variant="button" weight="bold" color="white">
              {heroContent.button2.text}
            </Typography>
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          height={heroImage.height}
          width={heroImage.width}
          loading="eager"
        />
      </div>
    </section>
  );
}

export default Hero;
