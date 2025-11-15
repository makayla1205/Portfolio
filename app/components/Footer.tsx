import Link from "next/link";

const Navlinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center md:gap-5">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/resume">Resume</Link></li>
    </ul>
)

export default function Footer() {
    return (
        <div className="h-50 bg-gradient-to-b from-slate-900 to-purple-900 flex items-center justify-center p-20">
            <div className="w-full flex flex-wrap items-center justify-between">
                <div className="text-3xl">
                    <Link href="/">Makayla Boyer</Link>
                </div>
                <nav className="">
                    <Navlinks/>
                </nav>
            </div>
        </div>
    );
}