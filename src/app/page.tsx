import MainNews from "./components/homepage/MainNews";
import Marquee from "./components/homepage/Marquee";
import { INews } from "@/type/news";
import OtherNews from "./components/homepage/OtherNews";
import { IOtherNews } from "@/type/otherNews";

export default async function Home() {
  const res = await fetch("http://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainNews: INews[] = section[0].articles;

  const otherSection: IOtherNews[] = section.slice(1);
  console.log(otherSection);

  console.log(section);
  return (
    <div>
      <Marquee />

      <div className="container mx-auto grid grid-cols-4 mt-5">
        {/* main news */}
        <div className="col-span-3">
          <MainNews news={mainNews} />
          <div className="grid gap-5 mt-7">
            {otherSection.map((os, i: number) => {
              return (
                <div key={i}>
                  <div className="border-b-4 pb-2 border-red-700">
                    <h2 className="font-bold">{os.title}</h2>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-5">
                    {os.articles.map((news) => {
                      return <OtherNews key={news.id} news={news} />;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* letest news */}

        <div></div>
      </div>
    </div>
  );
}
