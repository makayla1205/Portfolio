import { client } from "@/src/sanity/client";
import Card from "../components/ProjectCards";
import Link from "next/link";

const PROJECT_QUERY = `*[_type == 'Project']{
    _id, title, "slug": slug.current, GithubLink, DemoLink, 
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
    } | order(_createdAt)`

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

export default async function Projects() {
    const projects = await client.fetch<Project[]>(PROJECT_QUERY, {}, options);
    return (
        <div className="">
            <div className="min-h-screen p-10 md:p-20 pt-30 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col gap-10 items-center justify-center">
            <h1 className="text-6xl text-center">My Projects</h1>
            <p className="text-center text-lg lg:w-3/4">A collection of my creative and technical work — from web applications and e-commerce sites to digital 
                experiences that blend clean design with purposeful functionality. Each project reflects my passion for 
                intuitive UI, seamless UX, and thoughtful problem-solving through code and design.</p>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-10 w-full"> 
                {projects.map((p) => (
                    
                    <Card key={p._id} project={p}/>
                    
                    
                ))}
            </div>
            </div>
        </div>
        
    );
}