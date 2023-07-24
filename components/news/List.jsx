import Image from "next/image";
import Link from "next/link";

export function List({ selectenews }) {
  return (
    <div className="flex flex-col gap-5 px-2 lg:px-10">
      {selectenews?.map((news) => (
        <Link
          href={news.link}
          key={news.news_id}
          className="w-full text-white cursor-pointer hover:shadow-xl shadow-inherit overflow-hidden hover:scale-95 transition-transform duration-300 border border-gray-300 rounded-md hover:bg-opacity-70"
          target="_blank" // Open link in a new tab
        >
          <div className="flex flex-col md:flex-row items-center border-2 justify-center cursor-pointer hover:shadow-lg hover:bg-gray-50">
            <div className="relative h-40 w-full md:h-40 md:w-40 flex-shrink-0">
              <Image
                src={news.image}
                alt={news.link}
                layout="fill"
                objectFit="fill"
                title={news.link}
              />
            </div>
            <div className="flex flex-col  justify-center p-4">
              <h1 className="mb-2  font-semibold text-xl md:text-2xl text-black">
                {news.title}
              </h1>
              <p className=" text-lg md:text-xl leading-[23px] text-gray-950">
                {news.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
