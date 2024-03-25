'use client'
import Image from "next/image";
import { useState } from 'react'

export default function Home() {
  const covers = ['/img/cover.png','/img/cover2.png','/img/cover3.png','/img/cover4.png']
    const [index, setIndex] = useState(0);

  return (
    <main>
        <div className='block py-5 px-[26em] m-0 w-screen h-[100vh] relative'
        onClick={()=>{setIndex(index+1)}}>
            <Image src={covers[index%4]} alt='cover' fill={true} priority objectFit='cover'/>
            <div className='relative top-20 z-20 text-center font-sans bg-white w-full py-5 rounded-lg shadow-2xl'>
              <h1 className='text-6xl font-bold '>Online Job Fair</h1>
              <h3 className='text-2xl'>Presented By SuperIdol</h3>           
            </div>
        </div>
    </main>
  );
}
