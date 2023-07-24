import Image from "next/image";
import { useState } from "react";

export function Display({ work }) {
  const [paddingTop, setPaddingTop] = useState("0");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-2 lg:px-32 lg:pb-32">
      <div className="col-start-1 flex flex-col items-left font-serif antialiased leading-loose tracking-wide mr-20 w-full lg:w-[75%]">
        <h1 className="text-left font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[30px] leading-[26px] tracking-[0.25%] text-black mb-10">
          {work.title}
        </h1>
        <p className="font-poppins xs:text-[20px] xs:leading-[27px] text-[20px] leading-[23px] font-normal xl:w-[65%] sm:w-[75%] w-[100%] text-left text-black mb-10">
          {work.description}
        </p>
      </div>
      <div
        className="w-full !h-[30rem] relative col-start-1 md:col-start-2 mb-5 lg:mb-0 flex md:items-start"
        style={{ paddingTop }}
      >
        <Image
          src={work.image}
          layout="fill"
          objectFit="contain"
          onLoad={({ target }) => {
            const { naturalWidth, naturalHeight } = target;
            setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`);
          }}
          alt="latest news image"
        />
      </div>
    </div>
  );
}
