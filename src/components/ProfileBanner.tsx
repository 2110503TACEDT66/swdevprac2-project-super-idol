import Image from 'next/image';

export default function ProfileBanner(){
    return(
        <div className=" h-[85vh] w-[30vw] my-8 bg-[#E6E8E6] rounded-r-md py-0">
                <Image src={'/img/profilePic.png'} className=" pt-10 mx-28 rounded" 
                alt='profilPic' width={150} height={150}/>
            <div className="h-[25vh] w-60 my-6 bg-[#CED0CE] rounded-md pt-2 px-4 mx-16">    
                <h1 className='font-semibold'>Name</h1>
                <h3>&nbsp;&nbsp;Saroot Areerattanawetch</h3>
                <h1 className='font-semibold'>Tel.</h1>
                <h3>&nbsp;&nbsp;0634364481</h3>
                <h1 className='font-semibold'>Email</h1>
                <h3>&nbsp;&nbsp;saroot.nae@gmail.com</h3>
            </div>
                <button className='my-2 mx-28 py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold'>Resume</button>
                <button className='my-2 mx-28 py-1 rounded-sm w-[10vw] bg-[#F15025] text-white font-semibold'>Edit Profile</button>
        </div>
    )
}