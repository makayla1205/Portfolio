'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from 'lucide-react';

const Navlinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center md:gap-5">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
    </ul>
)

const navItems = [
    {name: "Home", href:"/"},
    {name: "Projects", href:"/projects"},
]

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

    const closeMenu = () => {setOpen(false)}

    return (
        <header className={`z-100 fixed top-0 left-0 w-full transition-all duration-300 ease-in-out border-b border-slate-900 ${scrolled ? "bg-gradient-to-r from-slate-900/90 to-purple-800/90 shadow-sm" : "bg-transparent"}`}>
            <div className="flex flex-row items-center justify-between p-5 pl-10 pr-10">
                <div className="text-3xl z-1">
                    <Link href="/">Makayla Boyer</Link>
                </div>
                <nav className="hidden md:block">
                    <Navlinks/>
                </nav>
                <button 
                className="md:hidden z-1 cursor-pointer"
                aria-expanded = {open}
                aria-controls="mobile menu"
                onClick={() => {setOpen(!open)}}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div> 
            <nav className={`absolute top-0 w-full bg-black h-screen transition-all duration-500 ease-in-out ${open ? "translate-y-0" : "-translate-y-full"} pt-20 pb-10`}>
                <ul className="flex flex-col pl-10">
                {navItems.map((item)=> {
                    return <li  key={item.name} className="mt-3 mb-3 text-xl"><Link className="inline-block w-full pt-2 pb-2" href={`${item.href}`} onClick={closeMenu}>{item.name}</Link></li>
                })}
                </ul>
            </nav> 
        </header>
    );
}