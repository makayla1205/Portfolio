import Image from "next/image";
import { urlFor } from "@/src/sanity/client";
import Link from "next/link";

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
interface ProjectCardProps {
  project: Project;
}

export default function Card({project}:ProjectCardProps) {
    return (
      <div className="bg-gradient-to-br from-blue-800/80 to-purple-900/80 rounded-xl h-full border border-transparent hover:border-slate-400 relative shadow-sm shadow-blue-600">
        <div className={`absolute top-0 right-0 p-1 pl-2 pr-2 border rounded-4xl min-w-20 text-center m-4 ${project.status.name === 'Active'? 'border-green-500 bg-green-500/80': ''} ${project.status.name === 'In Progress'? 'border-yellow-500 bg-yellow-500/80': ''} ${project.status.name === 'Archived'? 'border-red-500 bg-red-500/80': ''}`} >{project.status.name}</div>
            {project.CoverImage && (
            <Link href={`/projects/${project.slug}`}><Image
                src={urlFor(project.CoverImage).width(800).height(400).url()}
                alt={project.CoverImage.alt || project.title}
                width={800}
                height={400}
                quality={100}
                className="rounded-tl-xl rounded-tr-xl"
            /></Link>
            )}
            <div className="p-5">
              <div className="flex flex-wrap gap-5 items-center ">
                {project.tools.map((tool) => {
                  return <button key={tool.name} className="bg-slate-900 p-1 pl-5 pr-5 rounded-lg text-sm">{tool.name}</button>
                })}
              </div>
              <div className="mt-5">
                  <Link href={`/projects/${project.slug}`}><p className="text-2xl">{project.title}</p></Link>
                  <p className="mt-3 mb-3 line-clamp-3">{project.description}</p>
                  <Link href={`/projects/${project.slug}`} className="text-xl hover:text-blue-500">View Details &rarr;</Link>
              </div>
            </div>
        </div>
    );
}