import Image from "next/image";
import Typography from "./typography/typography";
import { faqCard, faqSectionContent } from "@/data/static-data";
import Card from "./card";
import Button from "./ui/button";

function FAQSection() {
  return (
    <section className="flex flex-col gap-9 items-center justify-center px-10 sm:px-8 mx-auto mt-10">
      <div className="relative w-15.5 aspect-square">
        <Image
          src={faqSectionContent.icon.src}
          alt={faqSectionContent.icon.alt}
          height={faqSectionContent.icon.height}
          width={faqSectionContent.icon.width}
          className="w-full h-full"
        />
      </div>
      <Typography variant="h2" weight="bold">
        {faqSectionContent.title}
      </Typography>
      <Typography variant="body">{faqSectionContent.description}</Typography>
      <div className="max-w-292.5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.75">
        {faqCard.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <Button
        variant="filled"
        className="bg-linear-to-b from-[#002987] to-[#006DD5] py-2.5 px-9.25"
      >
        <Typography variant="button" color="white">
          {faqSectionContent.button.text}
        </Typography>
      </Button>
    </section>
  );
}

export default FAQSection;
