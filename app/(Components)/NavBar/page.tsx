import Image from "next/image";
import NavButton from "../Navdiv";


export default function NavBar() {
  return (
    <>
      <div className="flex h-28 justify-evenly bg-white text-black rounded border-2">
        <div className="bg-white"><a href="">
          <Image src={"https://static.wixstatic.com/media/3fd7ef_bc6e6e28b63e415184f0f64d05057f82~mv2.png/v1/fill/w_165,h_131,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Navbar_logo_2.png"} alt="Logo" className="cursor-pointer" />
       
        </a>
          
        </div>

        <div className="flex items-center text-black  ">
          <NavButton text="Servies" />
          <NavButton text="Technologies" />
          <NavButton text="Resoures" />

          <button className="text-white bg-black  hover:shadow-lg hover:shadow-[#1056D9] p-5 px-10 text-center rounded-full font-semibold animate-bounce ">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
