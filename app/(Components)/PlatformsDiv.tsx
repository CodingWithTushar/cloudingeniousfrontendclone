import Image from "next/image";

interface Platforms {
    imgLink1:string;
    imgLink2:string;
    imgLink3:string;
    imgLink4:string;

}


export default function Platforms({imgLink1,imgLink2,imgLink3,imgLink4}:Platforms){
    return <>
    <div className="flex items-center gap-7 text-center justify-evenly my-5  ">
            <div className="flex justify-center items-center cursor-pointer bg-white w-52 hover:shadow-white shadow-2xl transition-all duration-300 rounded-lg  h-48 " >
                <Image src={imgLink1} alt="" width={150}  />
            </div>
            <div  className="flex justify-center items-center cursor-pointer bg-white w-52 hover:shadow-white shadow-2xl transition-all duration-300 rounded-lg  h-48">
                <Image src={imgLink2} alt="" width={150} />
            </div>
            <div  className="flex justify-center items-center cursor-pointer bg-white w-52 hover:shadow-white shadow-2xl transition-all duration-300 rounded-lg  h-48" >
                <Image src={imgLink3} alt="" width={150} />
            </div>
            <div  className="flex justify-center items-center cursor-pointer bg-white w-52 hover:shadow-white shadow-2xl transition-all duration-300 rounded-lg  h-48" >
                <Image src={imgLink4} alt="" width={150} />
            </div>
    </div>
    </>
  
}