import { client } from "@/src/sanity/client";
import Card from "../components/ProjectCards";
import Link from "next/link";

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
 } | order(_createdAt) `

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

export default async function Projects() {
    const projects = await client.fetch<Project[]>(PROJECT_QUERY, {}, options);
    return (
        <div className="">
            <div className="min-h-screen p-10 md:p-20 pt-30 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col gap-10 items-center justify-center">
            <h1 className="text-6xl text-center">My Projects</h1>
            <p className="text-center text-lg lg:w-3/4">A collection of my creative and technical work — from web applications and e-commerce sites to digital 
                experiences that blend clean design with purposeful functionality. Each project reflects my passion for 
                intuitive UI, seamless UX, and thoughtful problem-solving through code and design.</p>
            <div className="h-fit flex flex-wrap gap-10 justify-center"> 
                {projects.map((p) => (
                    <div key={p.id}>
                    <Card project={p}/>
                    </div>
                    
                ))}
            </div>
            </div>
        </div>
        
    );
}