import { INews } from "@/type/news";
import { ArrowRight, Link } from "lucide-react";
import Image from "next/image";

const OtherNews = ({news}:{news:INews}) => {
    return (
        <div>
            <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Live Badge */}
          {news.isLive && (
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
              {news.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#C10007]">
            {news.title}
          </h2>

          {/* Description */}
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {news.description}
          </p>

          {/* Date + Source */}
          <div className="mt-5 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5"></div>

            <span className="h-4 w-px bg-gray-300"></span>

            <span>{news.source}</span>
          </div>

        </div>
      </article>
        </div>
    );
};

export default OtherNews;