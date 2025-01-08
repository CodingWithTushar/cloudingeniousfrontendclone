interface Card {
  title: string;
  title1: string;
  paragraph: string;
}

export default function Cards({ title, title1, paragraph }: Card) {
  return (
    <div className="bg-white text-black  h-[550px] w-[500px] p-5 rounded-md shadow-2xl">
      <div className="text-center  text-3xl flex justify-center items-center my-5 gap-3 cursor-text">
       <h1>{title}</h1>
       <h1 className="text-[#4169E1]">{title1}</h1>
        </div>
        <div className="flex justify-center items-center mb-5">
       <div className="bg-[#4169E1]  h-1  w-96">
       </div>
        </div>

      <div className="text-2xl">{paragraph}</div>
    </div>
  );
}

