import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function List({ selectedWorks }) {
  const [paddingTop, setPaddingTop] = useState("0");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 lg:px-10">
      {selectedWorks?.map((work) => (
        <Link
          href={{
            pathname: "/selected-works/display",
            query: { id: `${work.id.toString()}` },
          }}
          key={work.id}
        >
          <a
            className="flex flex-col cursor-pointer hover:shadow-xl shadow-inherit overflow-hidden 
                      hover:scale-105 transition-transform duration-500 border shadow-2xl"
          >
            <div className="relative" style={{ paddingTop }}>
              <Image
                src={work.image}
                alt={work.title}
                // className="h-full w-full"
                layout="fill"
                objectFit="contain"
                onLoad={({ target }) => {
                  const { naturalWidth, naturalHeight } = target;
                  setPaddingTop(
                    `calc(100% / (${naturalWidth} / ${naturalHeight})`
                  );
                }}
              />
            </div>

            <h1 className="my-[1rem] font-poppins font-semibold text-2xl text-black text-center">
              {work.title}
            </h1>
          </a>
        </Link>
      ))}
    </div>
  );
}
