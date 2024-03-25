import Link from "next/link"

export default function TopMenuItem({ title,pageRef }:{title:string,pageRef:string}){
    return(
        <Link href={pageRef} className='text-center mx-10 font-verdana font-bold text-white text-base '>
            {title}
        </Link>
    )
}