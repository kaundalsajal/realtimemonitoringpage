"use client";

import { useState } from "react";
import Typography from "./typography/typography";
import { companyLogo, navLinks, navLoginLinks } from "@/data/static-data";
import Link from "next/link";
import Button from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="max-w-292.5 w-full flex py-4 justify-between items-center px-10 sm:px-8 mx-auto">
        <div>
          <Link href={companyLogo.href}>
            <Typography variant="h5" color="white">
              {companyLogo.text}
            </Typography>
          </Link>
        </div>
        <div className="hidden sm:flex gap-8.75">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="px-2 py-1 rounded-[5px] hover:bg-[#004CA0]"
            >
              <Typography variant="body-sm" color="white" className="uppercase">
                {link.text}
              </Typography>
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex gap-12.5 items-center">
          {navLoginLinks.map((link, index) => {
            if (link.type === "link") {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="px-2 py-1 rounded-[5px] hover:bg-[#004CA0]"
                >
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
                  <Button variant="filled" className="bg-white px-5 py-1">
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
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu className="text-white" />
        </button>
      </nav>
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-primary z-50 bg-linear-to-b from-[#000F6A] to-[#0056BA]">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <Typography
                  variant="body-sm"
                  color="white"
                  className="uppercase"
                >
                  {link.text}
                </Typography>
              </Link>
            ))}

            <div className="w-20 h-px bg-white/30" />

            {navLoginLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <Typography
                  variant="body-sm"
                  color="white"
                  className="uppercase"
                >
                  {link.text}
                </Typography>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
