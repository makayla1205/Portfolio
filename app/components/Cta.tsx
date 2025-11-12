import SlidingText from "./SlidingText"

export default function Cta() {
    return (
        <div className="min-h-screen flex items-center bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="flex flex-col lg:flex-row h-3/4 lg:items-center p-20 gap-10 w-full">
                <div className="w-full lg:min-w-150">
                    <h1 className="text-7xl">Hi, I'm</h1>
                    <h1 className="text-7xl">Makayla Boyer</h1>
                    <p className="mt-5 text-xl">Great web experiences don't just happen—they're built with intention. 
                        I'm a freelance web developer passionate about crafting clean, functional, and engaging digital 
                        experiences. I use React, Next.js, Node.js, and Express.js to create fast, thoughtful websites that feel good to use.</p>
                </div>
                <div className="overflow-hidden mask-fade">
                    <SlidingText/>
                </div>
            </div>
        </div>
    );
}