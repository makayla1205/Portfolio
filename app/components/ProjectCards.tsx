import Image from "next/image";
import { urlFor } from "@/src/sanity/client";
import Link from "next/link";
import { MoveRight } from 'lucide-react'

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
interface ProjectCardProps {
  project: Project;
}

export default function Card({project}:ProjectCardProps) {
    return (
        <div className="bg-slate-700 rounded-md w-100 h-full">
            {project.image && (
            <Image
                src={urlFor(project.image).width(800).height(400).url()}
                alt={project.image.alt || project.title}
                width={800}
                height={400}
                className="rounded-tl-md rounded-tr-md"
            />
            )}
            <div className="p-5">
                <p className="text-2xl">{project.title}</p>
                <p className="mt-3 mb-3 line-clamp-3">{project.description}</p>
                <Link href={`/projects/${project.slug}`} className="text-xl">View Details &rarr;</Link>
            </div>
        </div>
    );
}