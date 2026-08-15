export default function Testimonials() {
    return (
        <div className="w-full h-screen ">
            <div className="w-full h-20 flex justify-center">
                <h1 className="text-5xl font-bold">
                    Why Regular Cleaning
                </h1>
                <div className="w-52 h-24 rounded-3xl bg-white text-black font-bold flex justify-center items-center rotate-45 text-5xl mb-11">
                    Matters
                </div>
            </div>
            <div className="w-full h-10/12 mt-30 flex items-center">
                <div className="w-1/2 h-1/2  flex flex-col justify-around items-center">
                    <div className="w-1/2 h-2/5">
                        <p className="text-4xl font-bold">
                            ☀️ Solar Panels
                        </p>
                        <p className="text-3xl">Restore energy production</p>
                        <p className="text-3xl">Remove dust and sand</p>
                        <p className="text-3xl">Protect your investment </p>
                    </div>
                    <div className="w-1/2 h-2/5">
                        <p className="text-4xl font-bold">
                            ❄️ A/C Condensers
                        </p>
                        <p className="text-3xl">Improve cooling
                        </p>
                        <p className="text-3xl">Lower electricity use
                        </p>
                        <p className="text-3xl">Reduce compressor strain </p>
                    </div>
                </div>
                <div className="w-2/5 h-2/5 border border-white rounded-2xl">
                    <div className="w-full h-1/2 flex ">
                        <div className="w-38 h-38 rounded-full bg-white ml-10 mt-5">
                        </div>
                        <div className="ml-10 mt-9">
                                <p className="text-2xl font-bold">Zafar Hussain</p>
                                <p className="text-gray-400 text-md">Google</p>
                                <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="w-full h-1/2 p-10">
                        <p className="text-lg text-gray-400">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore harum natus, repellendus soluta sed, laudantium laborum voluptates, modi ducimus officia voluptatum beatae dolor sit? Earum placeat ad similique ea assumenda?
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}


