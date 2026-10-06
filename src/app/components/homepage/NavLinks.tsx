import { INav } from '@/type/nav';
import Link from 'next/link';
import React from 'react';

const NavLinks = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json();
    const navData: INav[] = data.data;

    const navLinks = navData.filter(n=> n.scrapable);
    return (
        <div className='flex gap-5 justify-center mt-2 py-2 border '>
            <Link href='/'>হোম</Link>
            {
                navLinks.map((n, i) => <Link key={i} href={n.slug}>{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;