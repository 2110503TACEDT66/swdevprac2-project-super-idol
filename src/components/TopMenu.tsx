import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu(){
    return(
        <div className='h-12 bg-[#F15025] top-0 left-0 right-0 z-30 flex flex-row justify-between'>
            
            <Image src={'/img/logo.png'} className='h-full w-auto' 
            alt='logo' width={0} height={0} sizes="100vh"/>

            <div className='py-3'>
                <TopMenuItem title='Job Offer' pageRef='/jobOffer'/>
                <TopMenuItem title='Company' pageRef='/company'/>
                <TopMenuItem title='Profile' pageRef='/profile'/>
            </div>

        </div>
    )
}