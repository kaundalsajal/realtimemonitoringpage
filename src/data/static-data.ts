interface Image {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

export interface Card {
  image: Image;
  title: string;
  description: string;
  button?: { text: string; href: string };
}

export const backgroundImage: Image = {
  src: "/background.png",
  alt: "Background Image",
  height: 1016,
  width: 1440,
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

export const heroImage: Image = {
  src: "/hero.png",
  alt: "Hero Image",
  height: 415,
  width: 657,
};

export const heroContent = {
  title: "Real-time Monitoring Your Infrstracture",
  description:
    "Manage applications. interrogate assets using SQL. Guarantee compliance.",
  button1: { text: "Get Started", href: "/" },
  button2: { text: "Contact Us", href: "/" },
};

export const featuredCards: Array<Card> = [
  {
    image: {
      src: "/featured-card-images/icon1.png",
      alt: "card icon",
      height: 110,
      width: 110,
    },
    title: "Block applications",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since ",
    button: {
      text: "Read more",
      href: "/",
    },
  },
  {
    image: {
      src: "/featured-card-images/icon2.png",
      alt: "card icon",
      height: 110,
      width: 110,
    },
    title: "interrogate your insfrastructure",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ",
    button: {
      text: "Read more",
      href: "/",
    },
  },
  {
    image: {
      src: "/featured-card-images/icon3.png",
      alt: "card icon",
      height: 110,
      width: 110,
    },
    title: "Set alerts",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ",
    button: {
      text: "Read more",
      href: "/",
    },
  },
];

export const complianceSectionImage: Image = {
  src: "/compliance-section-images/image.png",
  alt: "compliance image",
  height: 644,
  width: 648,
};

export const complianceSectionContent = {
  icon: {
    src: "/compliance-section-images/top-icon.png",
    alt: "top icon",
    height: 62,
    width: 62,
  },
  title: "Get peace of mind, Knowing you can gurantee compliance",
  descriptionIcon: {
    src: "/compliance-section-images/check-icon.png",
    alt: "check icon",
    height: 20,
    width: 20,
  },
  description: [
    "Get peace of mind,Knowing you can gurantee compliance",
    "Automatic whilelisting of applications",
    "It is a long established fact that a reader will be distracted by the readable content",
    "Full REST API for interrations:",
  ],
  bottomLine: {
    line1: "Get up and running in ",
    line2: "5 minutes.",
    line3: " No commitment.",
  },
};

export const faqSectionContent = {
  icon: {
    src: "/faq-section-images/icon.png",
    alt: "faq icon",
    height: 62,
    width: 62,
  },
  title: "Frequently Asked Questions",
  description:
    "You can sen email with your questions and we ll give your answer",
  button: {
    text: "Read More",
    href: "/",
  },
};

export const faqCard: Array<Card> = [
  {
    image: {
      src: "/faq-section-images/faq-card-images/icon1.png",
      alt: "faq icon",
      height: 45,
      width: 45,
    },
    title: "What is Zercurity?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: {
      src: "/faq-section-images/faq-card-images/icon2.png",
      alt: "faq icon",
      height: 45,
      width: 45,
    },
    title: "who is Zercurity for?",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look English.",
  },
  {
    image: {
      src: "/faq-section-images/faq-card-images/icon3.png",
      alt: "faq icon",
      height: 45,
      width: 45,
    },
    title: "Is my data secure?",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search infancy.",
  },
];

export const statsSectionImage: Image = {
  src: "/stats-section-images/image.png",
  alt: "stats section image",
  height: 390,
  width: 496,
};

export const statsCard = [
  {
    title: "100%",
    description: "Saas Technology",
  },
  {
    title: "100,000",
    description: "Endpoints per tenanty",
  },
  {
    title: "100+",
    description: "Threat intel sources",
  },
  {
    title: "124",
    description: "Active projects",
  },
  {
    title: "1,400+",
    description: "Built in queries",
  },
  {
    title: "200+",
    description: "Customers",
  },
];

export const partnerSectionImages: Array<Image> = [
  {
    src: "/partner-section-images/intel.png",
    alt: "intel icon",
    height: 60,
    width: 60,
  },
  {
    src: "/partner-section-images/aws.png",
    alt: "aws icon",
    height: 60,
    width: 60,
  },
  {
    src: "/partner-section-images/behance.png",
    alt: "behance icon",
    height: 20,
    width: 100,
  },
  {
    src: "/partner-section-images/facebook.png",
    alt: "facebook icon",
    height: 19,
    width: 108,
  },
  {
    src: "/partner-section-images/slack.png",
    alt: "slack icon",
    height: 18,
    width: 65,
  },
  {
    src: "/partner-section-images/ibm.png",
    alt: "ibm icon",
    height: 27,
    width: 42,
  },
  {
    src: "/partner-section-images/intel.png",
    alt: "intel icon",
    height: 60,
    width: 60,
  },
  {
    src: "/partner-section-images/aws.png",
    alt: "aws icon",
    height: 60,
    width: 60,
  },
  {
    src: "/partner-section-images/behance.png",
    alt: "behance icon",
    height: 20,
    width: 100,
  },
  {
    src: "/partner-section-images/facebook.png",
    alt: "facebook icon",
    height: 19,
    width: 108,
  },
  {
    src: "/partner-section-images/slack.png",
    alt: "slack icon",
    height: 18,
    width: 65,
  },
  {
    src: "/partner-section-images/ibm.png",
    alt: "ibm icon",
    height: 27,
    width: 42,
  },
  {
    src: "/partner-section-images/intel.png",
    alt: "intel icon",
    height: 60,
    width: 60,
  },
  {
    src: "/partner-section-images/aws.png",
    alt: "aws icon",
    height: 60,
    width: 60,
  },
  {
    src: "/partner-section-images/behance.png",
    alt: "behance icon",
    height: 20,
    width: 100,
  },
  {
    src: "/partner-section-images/facebook.png",
    alt: "facebook icon",
    height: 19,
    width: 108,
  },
  {
    src: "/partner-section-images/slack.png",
    alt: "slack icon",
    height: 18,
    width: 65,
  },
  {
    src: "/partner-section-images/ibm.png",
    alt: "ibm icon",
    height: 27,
    width: 42,
  },
  {
    src: "/partner-section-images/intel.png",
    alt: "intel icon",
    height: 60,
    width: 60,
  },
  {
    src: "/partner-section-images/aws.png",
    alt: "aws icon",
    height: 60,
    width: 60,
  },
  {
    src: "/partner-section-images/behance.png",
    alt: "behance icon",
    height: 20,
    width: 100,
  },
  {
    src: "/partner-section-images/facebook.png",
    alt: "facebook icon",
    height: 19,
    width: 108,
  },
  {
    src: "/partner-section-images/slack.png",
    alt: "slack icon",
    height: 18,
    width: 65,
  },
  {
    src: "/partner-section-images/ibm.png",
    alt: "ibm icon",
    height: 27,
    width: 42,
  },
];

export const newsletterSectionContent = {
  icon: {
    src: "/newsletter-section-images/icon.png",
    alt: "email icon",
    height: 62,
    width: 62,
  },
  title: "Stay updated!",
  inputIcon: {
    src: "/newsletter-section-images/input-icon.png",
    alt: "input email icon",
    height: 24,
    width: 42,
  },
  inputPlaceholder: "Enter your email",
  buttonText: "Subscribe",
};

export const footerSocialLinks = [
  {
    icon: {
      src: "/footer-images/icon1.png",
      alt: "link icon",
      height: 16,
      width: 20,
    },
    href: "/",
  },
  {
    icon: {
      src: "/footer-images/icon2.png",
      alt: "link icon",
      height: 18,
      width: 19,
    },
    href: "/",
  },
  {
    icon: {
      src: "/footer-images/icon3.png",
      alt: "link icon",
      height: 20,
      width: 19,
    },
    href: "/",
  },
  {
    icon: {
      src: "/footer-images/icon4.png",
      alt: "link icon",
      height: 18,
      width: 14,
    },
    href: "/",
  },
];

export const footerCopyrightText = "@2023 Zercurity.All Rights Reserved.";

export const footerSiteLink = {
  text: "hello@zercurity.com",
  href: "/",
};

export const footerBackground: Image = {
  src: "/footer-images/footer-bg.png",
  alt: "footer bg",
  height: 590,
  width: 1356,
};
