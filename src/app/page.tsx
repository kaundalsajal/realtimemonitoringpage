import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { backgroundImage } from "@/data/static-data";
import clsx from "clsx";


function Page() {
  return (
    <>
    <header className="fixed top-0 left-0 flex justify-center w-full">
      <NavBar/>
    </header>
      <main
        className={clsx(
          `bg-[url(${backgroundImage.src})]`,
          " flex justify-center h-screen w-screen bg-no-repeat bg-center",
        )}
      >
        <Hero/>
      </main>
    </>
  );
}

export default Page;
