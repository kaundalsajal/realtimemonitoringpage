interface Image {
  src: string;
  alt: string;
}

export const backgroundImage: Image = {
  src: "/background.png",
  alt: "Background Image",
};

export const companyLogo = {
  text: "Logo",
  href: "/",
};

export const navLinks = [
  { text: "About", href: "/" },
  { text: "OsQuery", href: "/" },
  { text: "Docs", href: "/" },
];

export const navLoginLinks = [
  { type: "link", text: "Login", href: "/" },
  {
    type: "button",
    text: "Create Account",
    href: "/",
  },
];

export const heroImage:Image = {
  src:"/hero.png",
  alt:"Hero Image"
}