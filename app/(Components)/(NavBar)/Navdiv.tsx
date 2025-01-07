interface Button{
    text: string;
}

export default function NavButton({text}:Button){
    return <div className="text-3xl font-semibold px-10 cursor-pointer hover:text-[#1056D9] ">
        {text}
    </div>
}