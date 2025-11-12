'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from 'lucide-react';

const Navlinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center md:gap-5">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/resume">Resume</Link></li>
    </ul>
)

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (open) {
        document.body.style.overflow = "hidden";
        } else {
        document.body.style.overflow = "";
        }
        return () => {
        document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`z-100 fixed top-0 left-0 w-full transition-all duration-300 ease-in-out border-b border-slate-700 ${scrolled ? "bg-gradient-to-r from-slate-900/90 to-purple-800/90 shadow-sm" : "bg-transparent"}`}>
            <div className="flex flex-row items-center justify-between p-5 pl-10 pr-10">
                <div className="text-3xl">
                    <Link href="/">Makayla Boyer</Link>
                </div>
                <nav className="hidden md:block">
                    <Navlinks/>
                </nav>
                <button 
                className="md:hidden z-1"
                aria-expanded = {open}
                aria-controls="mobile menu"
                onClick={() => {setOpen(!open)}}
                >
                    <Menu />
                </button>
            </div> 
            <nav className={`absolute top-0 w-full md:hidden border-t bg-black h-screen ${open ? "block" : "hidden"} p-4`}>
                <Navlinks />
            </nav> 
        </header>
    );
}