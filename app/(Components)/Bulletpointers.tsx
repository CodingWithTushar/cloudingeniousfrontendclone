import Image from "next/image"

interface pointer{
    text:string
}

export default function Pointer({text}:pointer){
 
    return <div className="flex font-bold text-2xl gap-3  items-center p-4">
        <Image src={"https://img.icons8.com/?size=100&id=fFqmaazlzntF&format=png&color=000000"} alt="" width={40}/>
        {text}
    </div>
}