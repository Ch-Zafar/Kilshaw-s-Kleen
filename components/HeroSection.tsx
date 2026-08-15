import Image from "next/image";
import Button from "./Button";
import { Navbar } from "./Navbar";

export default function HeroSection() {
    return (
        <div className="w-full h-screen ">
            <div className="w-full h-11/12 flex items-center ">
                <div className="w-1/2 h-full flex flex-col justify-center">
                    <h1 className="font-bold text-6xl leading-24 my-10">
                        Maximize your solar output with spotless
                        panels—clean today, save more tomorrow.
                    </h1>
                    <Button title="Get a Qoute" />
                </div>
                <div className="w-1/2 h-full py-20 pl-20 ">
                    <div className="w-full h-full relative  ">
                        <Image src={"/Images/HeroSection.jpg"} fill alt="Image not found" className="rounded-3xl" />

                    </div>

                </div>
            </div>
        </div>
    );
}