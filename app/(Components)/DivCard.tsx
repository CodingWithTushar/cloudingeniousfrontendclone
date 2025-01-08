import Image from "next/image";

interface DivProps {
  imglink: string;
  text: string;
}

export default function Card({ text, imglink }: DivProps) {
  return (
    <div className="flex justify-center w-[450px] items-center gap-3 my-10 hover:text-[#4169E1] hover:border-[#4169E1] border-4 rounded-2xl p-2">
      <div>
        <Image 
          src={imglink} 
          alt="Image" 
          className="rounded-2xl" 
          width={100} // Adjust width
          height={100} // Adjust height
        />
      </div>
      <div>
        <h1 className="font-semibold text-2xl">{text}</h1>
      </div>
    </div>
  );
}
