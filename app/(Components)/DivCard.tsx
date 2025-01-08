
interface Div {
    imglink:string;
    text:string
}

export default function ({text,imglink}:Div){
    return <>
    <div className="flex justify-center w-[450px] items-center gap-3 my-10 hover:text-[#4169E1] hover:border-[#4169E1] border-4 rounded-2xl p-2">
        <div>
          <img src={imglink} alt="" className="rounded-2xl"/>
        </div>
        <div>
          <h1 className=" font-semibold text-2xl">{text}</h1>
        </div>
  </div>        
    </>  
}