import { heroImage } from '@/data/static-data';
import Image from 'next/image';
import React from 'react'

function Hero() {
  return (
    <section className="max-w-292.5 w-full flex flex-col-reverse md:flex-row py-4 justify-between items-center">
      <div className="w-full md:w-1/2">ghjkhjkghjk</div>
      <div className="w-full md:w-1/2">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          height={415}
          width={657}
        />
      </div>
    </section>
  );
}

export default Hero
