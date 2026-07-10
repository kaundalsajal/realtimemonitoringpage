import React from "react";
import Typography from "./typography/Typography";
import { companyLogo, navLinks, navLoginLinks } from "@/data/static-data";
import Link from "next/link";
import Button from "./ui/Button";

function NavBar() {
  return (
    <nav className="max-w-292.5 w-full flex py-4 justify-between items-center">
      <div>
        <Link href={companyLogo.href}>
          <Typography variant="h5" color="white">
            {companyLogo.text}
          </Typography>
        </Link>
      </div>
      <div className="flex gap-8.75">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <Typography variant="body-sm" color="white" className="uppercase">
              {link.text}
            </Typography>
          </Link>
        ))}
      </div>
      <div className="flex gap-12.5">
        {navLoginLinks.map((link, index) => {
          if (link.type === "link") {
            return (
              <Link key={index} href={link.href}>
                <Typography
                  variant="body-sm"
                  color="white"
                  className="uppercase"
                >
                  {link.text}
                </Typography>
              </Link>
            );
          } else if (link.type === "button") {
            return (
              <Link key={index} href={link.href}>
                <Button variant="filled" className="bg-white">
                  <Typography
                    variant="body-sm"
                    color="primary"
                    className="uppercase"
                  >
                    {link.text}
                  </Typography>
                </Button>
              </Link>
            );
          }
        })}
      </div>
    </nav>
  );
}

export default NavBar;
