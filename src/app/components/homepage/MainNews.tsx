import Image from "next/image";
import { INews } from "@/type/news";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MainNews = ({ news }: { news: INews[] }) => {
    const [firstNews, ...otherNews] = news;
  0;
  return (
    <div className="grid grid-cols-2 gap-5">
      <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Live Badge */}
          {firstNews.isLive && (
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md bg-[#C10007] px-3 py-1.5 text-sm font-bold text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
              LIVE
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category */}
          <div className="mb-3">
            <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-[#C10007]">
              {firstNews.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#C10007]">
            {firstNews.title}
          </h2>

          {/* Description */}
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {firstNews.description}
          </p>

          {/* Date + Source */}
          <div className="mt-5 flex items-center gap-4 border-b pb-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5"></div>

            <span className="h-4 w-px bg-gray-300"></span>

            <span>{firstNews.source}</span>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">
              {firstNews.type}
            </span>

            <Link
              href={firstNews.link}
              target="_blank"
              className="flex items-center gap-2 rounded-md bg-[#C10007] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-800"
            >
              বিস্তারিত পড়ুন
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>

      <article className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        {otherNews.slice(0,4).map((on: INews) => {
          return (
            <div
              key={on.id}
              className="flex gap-5 border-b p-4 last:border-b-0 hover:bg-gray-50"
            >
              {/* Image */}
              

              {/* Content */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">
                {/* Category */}
                <span className="mb-1 text-sm font-semibold text-[#C10007]">
                  {on.category}
                </span>

                {/* Title */}
                <h2 className="line-clamp-2 text-lg font-bold text-gray-900 hover:text-[#C10007]">
                  {on.title}
                </h2>


                
              </div>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default MainNews;
