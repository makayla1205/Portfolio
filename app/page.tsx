import Cta from "./components/Cta";
import { Code, Braces, Wallpaper  } from 'lucide-react'
import Tools from "./components/Tools";
import { client } from "@/src/sanity/client";
import Link from "next/link";
import Card from "./components/ProjectCards";
import ContactForm from "./components/ContactForm";

const PROJECT_QUERY = `*[_type == 'Project']{
    _id, title, "slug": slug.current, GithubLink, DemoLink, status,
    CoverImage {
        asset->{
            _id,
            url
        },
        alt
        }, 
    tools[]->{_id, logo {
        asset->{
            _id,
            url
        },
        alt
        }, name}, 
    "description":description[0].children[0].text, status->{name}
    } | order(_createdAt) [0...3]`

const options = { next: { revalidate: 30 } };

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface Tools {
  name: string,
  logo: SanityImage
}


interface Status {
  name: string
}

interface Project {
    _id: number,
    title: string,
    slug: string,
    description: string,
    CoverImage: SanityImage,
    GithubLink: string,
    DemoLink: string,
    tools: Tools[],
    status: Status
}


export default async function Home() {
  const projects = await client.fetch<Project[]>(PROJECT_QUERY, {}, options);

  return (
    <div>
      <Cta/>
      <div className="min-h-screen p-10 lg:p-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl lg:text-6xl text-center text-purple-400">About Me</h1>
        <p className="text-center text-md lg:text-lg lg:w-3/4 text-gray-300">I’m a freelance web developer who enjoys building digital experiences that are clean, functional, 
          and thoughtfully designed. I work across both the front-end and back-end to create applications that are fast, 
          intuitive, and enjoyable to use. My focus is on writing maintainable code, understanding user needs, and creating 
          solutions that feel seamless.</p>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="p-10 rounded-md flex flex-col items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 ">
            <Code  size={"35"} className="text-green-300"/>
            <h2 className="text-center text-xl">Front-End Development</h2>
            <p className="text-center">I create engaging, responsive interfaces that feel good to use. Working with React and Next.js, I focus on clarity, 
              balance, and subtle movement that guides users instead of overwhelming them.</p>
          </div>
          <div className="p-10 rounded-md flex flex-col items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 ">
            <Braces  size={"35"} className="text-red-300"/>
            <h2 className="text-center text-xl">Back-End Development</h2>
            <p className="text-center">Behind the scenes, I build reliable application architecture with Node.js and Express. I care about clean structure, 
              secure data handling, and making sure everything runs smoothly under the hood.</p>
          </div>
          <div className="p-10 rounded-md flex flex-col items-center gap-2 bg-gradient-to-r from-blue-900 to-purple-900 ">
            <Wallpaper  size={"35"} className="text-purple-300"/>
            <h2 className="text-center text-xl">UI/UX</h2>
            <p className="text-center">I bridge design and functionality. From wireframes to final polish, I think about how users feel as they navigate 
              a product—shaping layout, rhythm, spacing, and flow to create a cohesive experience from front to back.</p>
          </div>
        </div>
      </div>
      <div className="min-h-screen p-10 lg:p-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl lg:text-6xl text-center text-purple-400">Tools & Technologies</h1>
        <p className="text-center text-md lg:text-lg lg:w-3/4 text-gray-300">My creative toolkit—where exploration, design, and experimentation come together. From design to deployment, 
        every tool plays a role in shaping intuitive, meaningful, and visually polished digital experiences.</p>
        <Tools/>
      </div>
      <div className="min-h-screen p-10 lg:p-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl lg:text-6xl text-center text-purple-400">Latest Projects</h1>
        <p className="text-center text-md lg:text-lg lg:w-3/4 text-gray-300">Where ideas turn into interactive experiences — explore my most recent creations.</p>
       <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-10 w-full"> 
          {projects.map((p) => (
            <Card key={p._id} project={p}/>
          ))}
        </div>
        <button className="bg-blue-900 p-3 pl-5 pr-5 rounded-md text-xl"><Link href="/projects">View More</Link></button>
      </div>
      <div className="min-h-screen p-10 lg:p-20 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800 flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl lg:text-6xl text-center text-purple-400">Contact Me</h1>
        <p className="text-center text-md lg:text-lg lg:w-3/4 text-gray-300">Let’s bring your ideas to life — I’m currently available for freelance projects.</p>
        <ContactForm/>
      </div>
    </div>
    
  );
}
