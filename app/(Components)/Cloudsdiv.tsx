import Image from "next/image";

interface CloudDiv{
    imglink: string,
    text: string,
}

export default function CloudDiv({imglink,text}:CloudDiv){
    return <>
        <div className="flex justify-center items-center flex-col text-2xl w-60 bg-white text-black font-semibold shadow-white shadow hover:shadow-2xl rounded-md cursor-pointer">
            <Image src={imglink} alt="" width={150} className="text-center " />
         <div className="text-center">
         {text}
        </div>   
        </div>
    </>
}