interface Card {
    title: string;
    paragraph: string;
  }
  
  export default function SmallCard({ title, paragraph }: Card) {
    return (
      <div className="bg-white text-black  h-[350px] w-[500px] p-5 rounded-lg hover:shadow-2xl">
        <div className="text-center  text-3xl flex justify-center items-center mt-5  mb-3 gap-3 cursor-text">
         <h1>{title}</h1>
        
          </div>
          <div className="flex justify-center items-center mb-3">
         <div className="bg-[#4169E1]  h-1  w-96">
         </div>
          </div>
  
        <div className="text-2xl">{paragraph}</div>
      </div>
    );
  }