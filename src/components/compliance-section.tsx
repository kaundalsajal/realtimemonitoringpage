import {
  complianceSectionContent,
  complianceSectionImage,
} from "@/data/static-data";
import Image from "next/image";
import Typography from "./typography/typography";



function ComplianceSection() {
  return (
    <section className="max-w-292.5 w-full flex flex-col-reverse md:flex-row py-4 justify-between items-center px-10 sm:px-8 mt-10 mx-auto">
      <div className="flex flex-col gap-8.75 md:max-w-108">
        <Image
          src={complianceSectionContent.icon.src}
          alt={complianceSectionContent.icon.alt}
          height={complianceSectionContent.icon.height}
          width={complianceSectionContent.icon.width}
        />
        <Typography variant="h3" weight="bold">
          {complianceSectionContent.title}
        </Typography>
        {complianceSectionContent.description.map((line, index) => (
          <span key={index} className="flex gap-6.25">
            <Image
              src={complianceSectionContent.descriptionIcon.src}
              alt={complianceSectionContent.descriptionIcon.alt}
              height={complianceSectionContent.descriptionIcon.height}
              width={complianceSectionContent.descriptionIcon.height}
              className="w-5 h-5"
            />
            <Typography variant="body">{line}</Typography>
          </span>
        ))}
        <div>
          <Typography variant="body-lg" as="span">
            {complianceSectionContent.bottomLine.line1}
          </Typography>
          <Typography variant="body-lg" as="span" className="text-[#00DBEC]">
            {complianceSectionContent.bottomLine.line2}
          </Typography>
          <Typography variant="body-lg" as="span">
            {complianceSectionContent.bottomLine.line3}
          </Typography>
        </div>
      </div>
      <div>
        <Image
          src={complianceSectionImage.src}
          alt={complianceSectionImage.alt}
          height={complianceSectionImage.height}
          width={complianceSectionImage.width}
        />
      </div>
    </section>
  );
}

export default ComplianceSection;
