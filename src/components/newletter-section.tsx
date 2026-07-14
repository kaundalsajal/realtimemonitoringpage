import { newsletterSectionContent } from "@/data/static-data";
import Image from "next/image";
import Typography from "./typography/typography";
import Button from "./ui/button";

function NewsletterSection() {
  return (
    <section className="max-w-292.5 w-full flex flex-col justify-center items-center gap-8.75 mt-20 mx-auto">
      <div className="flex flex-col justify-center items-center gap-8.75">
        <Image
          src={newsletterSectionContent.icon.src}
          alt={newsletterSectionContent.icon.alt}
          height={newsletterSectionContent.icon.height}
          width={newsletterSectionContent.icon.width}
        />
        <Typography variant="h5" weight="bold">
          {newsletterSectionContent.title}
        </Typography>
      </div>
      <form className="flex flex-col justify-center items-center gap-8.75">
        <div className="relative flex justify-between w-62.5 h-8 sm:w-80 sm:h-8  md:w-115.5 md:h-11.25 rounded-[5px] bg-white">
          <Image
            src={newsletterSectionContent.inputIcon.src}
            alt={newsletterSectionContent.inputIcon.alt}
            height={newsletterSectionContent.inputIcon.height}
            width={newsletterSectionContent.inputIcon.width}
          />
          <input
            type="email"
            name="email"
            placeholder={newsletterSectionContent.inputPlaceholder}
            className="w-full h-full outline-0"
          />
        </div>
        <Button
          variant="filled"
          className="bg-linear-to-b from-[#00B9E4] to-[#00E3EE] px-10 py-2"
        >
          <Typography variant="button" color="white">
            {newsletterSectionContent.buttonText}
          </Typography>
        </Button>
      </form>
    </section>
  );
}

export default NewsletterSection;
