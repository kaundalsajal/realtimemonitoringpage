import { featuredCards } from "@/data/static-data";
import Card from "./card";

function FeaturedSection() {
  return (
    <section className="max-w-292.5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5.75 px-10 mt-10 sm:px-8 mx-auto">
      {featuredCards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </section>
  );
}

export default FeaturedSection;
