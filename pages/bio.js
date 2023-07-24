import { Hero } from "../components/bio/Hero";
import { MainHeader } from "../components/common/MainHeader";

export default function Bio() {
  return (
    <main className="w-full h-full px-2 lg:px-10 py-32 bg-white flex flex-col">
      <MainHeader title="Helen Zeray : Biography" />
      <div className="flex flex-col">
        <h1 className="font-sans font-normal text-3xl md:text-4xl leading-[2.35rem] text-left text-black w-full mb-4">
          BIO
        </h1>
        <Hero />
      </div>
    </main>
  );
}
