import Image from "next/image";

export function Navbar(){
    return(
        <div className="w-full h-32 bg-transparent flex flex-row justify-between">
            <div className="w-1/4 h-full">
                <Image src={"/Images/Logo.png"} alt="Image Not found" width={150} height={150}/>
            </div>
            <div className="w-1/2 h-full">
                <ul className="w-full h-full flex flex-row justify-between items-center ">
                    <li><a href="#">Solar Panel Cleaning</a></li>
                    <li><a href="#">AC Condeser Cleaning</a></li>
                    <li><a href="#">About</a></li>

                </ul>
            </div>
            <div className="w-1/4 h-full flex flex-row justify-end items-center">
                <button className="w-36 h-10 bg-white rounded-4xl text-black">
                    Contact Us!
                </button>
            </div>
        </div>
    );


}
