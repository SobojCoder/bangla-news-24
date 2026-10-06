interface IMostReadNews{
    title:string
}

const MostReadNews = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const news = data.data;
    return (
        <div className='card p-4 bg-[#FFFFFF] border '>
            <h2 className="font-bold text-xl text-red-800">সর্বাধিক পঠিত</h2>
            {
                news.map((n:IMostReadNews, i:number)=> {
                    return (
                        <div className="flex gap-2 my-3 items-center hover:text-red-800 cursor-pointer" key={i}>
                            <p className="font-bold text-xl text-red-500">{i+1}</p>
                            <h2 className="text-lg font-medium">{n.title}</h2>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default MostReadNews;