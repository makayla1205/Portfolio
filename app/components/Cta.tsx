'use client'
import SlidingText from "./SlidingText"
import { useEffect, useState } from "react";

export default function Cta() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen p-10 lg:p-20 flex items-center bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="flex flex-col lg:flex-row h-3/4 lg:items-center gap-10 w-full">
                <div className="w-full lg:min-w-150 mt-10">
                    <h1 className={`text-5xl lg:text-7xl text-center md:text-left mt-10 text-purple-400 transition-all duration-1000 ease-out ${mounted? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>Hi, I'm</h1>
                    <h1 className={`text-5xl lg:text-7xl text-center md:text-left text-purple-400 transition-all duration-1000 ease-out ${mounted ? "translate-x-0 opacity-100" : "translate-x-full opacity-0" }`} style={{ transitionDelay: `200ms` }}>Makayla Boyer</h1>
                    <p className={`mt-5 text-lg lg:text-xl text-center md:text-left text-gray-300 transition-all duration-1000 ease-out ${mounted? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} style={{ transitionDelay: `400ms` }}>Great web experiences don't just happen—they're built with intention. 
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