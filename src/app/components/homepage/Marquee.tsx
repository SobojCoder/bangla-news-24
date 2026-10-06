export interface IHeadline {
  id: string
  title: string
  description: string
  link: string
  imageUrl: string
  imageAlt: string
  category: string
  type: string
  isLive: boolean
  source: string
}


import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const Marquee = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data= await res.json();
    const headline = data.data;

    return (
        <div className="bg-[#C10007] text-white">
            <div className="flex container mx-auto">
            <h2 className="bg-[#9F0712] text-white py-2 px-4 ">সর্বশেষ</h2>
            <MarqueeText direction='right' duration={15} className=" py-2">
            {
                headline.map((h: IHeadline) => <span key={h.id}><span>{h.title}</span><span className='mx-3'>•</span></span>)
            }
            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;