import Image from "next/image";
import Cta from "./components/Cta";
import { Code, Braces, Wallpaper  } from 'lucide-react'
import Cards from "./components/AboutCards";
import Tools from "./components/Tools";
import { type SanityDocument } from "next-sanity";

import { client } from "@/src/sanity/client";
import Link from "next/link";
import Card from "./components/ProjectCards";

const PROJECT_QUERY = `*[_type == 'Project']{
  _id, title, "slug": slug.current, linkGithub, linkDemo, 
  image {
      asset->{
        _id,
        url
      },
      alt
    }, 
  tools, "description":description[0].children[0].text
 } | order(_createdAt desc) [0...3]`

const options = { next: { revalidate: 30 } };

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface Project {
    id: number,
    title: string,
    slug: string,
    description: string,
    image: SanityImage,
    linkGithub: string,
    linkDemo: string,
    tools: string
}

export default async function Home() {
  const projects = await client.fetch<Project[]>(PROJECT_QUERY, {}, options);
  return (
    <div>
      <Cta/>
      <div className="min-h-screen p-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-center">About Me</h1>
        <p className="text-center text-lg lg:w-3/4">I’m a freelance web developer who enjoys building digital experiences that are clean, functional, 
          and thoughtfully designed. I work across both the front-end and back-end to create applications that are fast, 
          intuitive, and enjoyable to use. My focus is on writing maintainable code, understanding user needs, and creating 
          solutions that feel seamless.</p>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="p-10 rounded-md flex flex-col items-center gap-2 bg-blue-900">
            <Code  size={"35"} className="text-ree-300"/>
            <h2 className="text-center text-xl">Front-End Development</h2>
            <p className="text-center">I create engaging, responsive interfaces that feel good to use. Working with React and Next.js, I focus on clarity, 
              balance, and subtle movement that guides users instead of overwhelming them.</p>
          </div>
          <div className="p-10 rounded-md flex flex-col items-center gap-2 bg-blue-900">
            <Braces  size={"35"} className="text-red-300"/>
            <h2 className="text-center text-xl">Back-End Development</h2>
            <p className="text-center">Behind the scenes, I build reliable application architecture with Node.js and Express. I care about clean structure, 
              secure data handling, and making sure everything runs smoothly under the hood.</p>
          </div>
          <div className="p-10 rounded-md flex flex-col items-center gap-2 bg-blue-900">
            <Wallpaper  size={"35"} className="text-purple-300"/>
            <h2 className="text-center text-xl">UI/UX</h2>
            <p className="text-center">I bridge design and functionality. From wireframes to final polish, I think about how users feel as they navigate 
              a product—shaping layout, rhythm, spacing, and flow to create a cohesive experience from front to back.</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen p-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-center">Tools & Technologies</h1>
        <p className="text-center text-lg lg:w-3/4">My creative toolkit—where exploration, design, and experimentation come together. From design to deployment, 
        every tool plays a role in shaping intuitive, meaningful, and visually polished digital experiences.</p>
        <Tools/>
      </div>
      <div className="min-h-screen p-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 flex flex-col items-center justify-center gap-10">
        <h1 className="text-6xl text-center">Latest Projects</h1>
        <p className="text-center text-lg lg:w-3/4">Where ideas turn into interactive experiences — explore my most recent creations.</p>
        <div className="flex flex-col lg:flex-row gap-10 flex-wrap justify-center items-center">
          {projects.map((p) => (
            <Card key={p.id} project={p}/>
          ))}
        </div>
        <button className="bg-blue-900 p-3 pl-5 pr-5 rounded-md text-xl"><Link href="/projects">View More</Link></button>
      </div>
    </div>
    
  );
}
