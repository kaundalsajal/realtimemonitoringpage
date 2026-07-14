import {
  footerCopyrightText,
  footerSiteLink,
  footerSocialLinks,
} from "@/data/static-data";
import Image from "next/image";
import Link from "next/link";
import Typography from "./typography/typography";

function Footer() {
  return (
    <footer className="max-w-292.5 w-full flex flex-col md:flex-row py-4 justify-between items-center px-10 sm:px-8 mx-auto">
      <div className="flex gap-5">
        {footerSocialLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <Image
              src={link.icon.src}
              alt={link.icon.alt}
              height={link.icon.height}
              width={link.icon.width}
            />
          </Link>
        ))}
      </div>
      <div>
        <Typography variant="body" color="white">
          {footerCopyrightText}
        </Typography>
      </div>
      <div>
        <Link href={footerSiteLink.href}>
          <Typography variant="body" color="white">
            {footerSiteLink.text}
          </Typography>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
