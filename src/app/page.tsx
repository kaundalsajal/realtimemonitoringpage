import ComplianceSection from "@/components/compliance-section";
import FAQSection from "@/components/faq-section";
import FeaturedSection from "@/components/feature-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NavBar from "@/components/nav-bar";
import NewsletterSection from "@/components/newletter-section";
import PartnerSection from "@/components/partner-section";
import StatsSection from "@/components/stats-section";
import { footerBackground } from "@/data/static-data";
import Image from "next/image";

function Page() {
  return (
    <>
      <header className="relative w-full ">
        <NavBar />
      </header>
      <main className="relative w-screen z-10">
        <Hero />
        <FeaturedSection />
        <ComplianceSection />
        <FAQSection />
        <StatsSection />
        <PartnerSection />
        <NewsletterSection />
      </main>
      <Footer />
      <div className="absolute flex justify-center bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden -z-10">
        <Image
          src={footerBackground.src}
          alt={footerBackground.alt}
          width={footerBackground.width}
          height={footerBackground.height}
          className=" min-w-250"
        />
      </div>
    </>
  );
}

export default Page;
