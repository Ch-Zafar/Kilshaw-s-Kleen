import Image from "next/image";
import Button from "./Button";

export function Navbar(){
    return(
        <div className="w-full h-16 bg-transparent flex flex-row justify-between ">
            <div className="w-1/4 h-full flex flex-row items-center">
                <Image src={"/Images/Logo.png"} alt="Image Not found" width={100} height={100}/>
            </div>
            <div className="w-1/2 h-full">
                <ul className="w-full h-full flex flex-row justify-between items-center ">
                    <li><a href="#">Solar Panel Cleaning</a></li>
                    <li><a href="#">AC Condeser Cleaning</a></li>
                    <li><a href="#">About</a></li>

                </ul>
            </div>
            <div className="w-1/4 h-full flex flex-row justify-end items-center">
                <Button title="Contact Me"/>
            </div>
        </div>
    );


}
