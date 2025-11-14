
import { client, urlFor } from "@/src/sanity/client";
import Image from "next/image";
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

export default async function Project({params}: {params: {slug: string};}) {
    const { slug } = await params;
    const PROJECT_QUERY = `*[_type == 'Project' && slug.current == "${slug}"]{
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
    }[0]`
    const project = await client.fetch<Project>(PROJECT_QUERY, {}, options);
    console.log(project)
    return (
        <div className="min-h-screen p-10 lg:p-20 pt-30 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col gap-10 items-center justify-center">
            <div className="w-full mt-3 text-center flex flex-col items-center">
                <h1 className="text-6xl">{project.title}</h1>
                <div className="flex flex-wrap gap-5 items-center ">
                {project.tools.map((tool) => {
                  return <button key={tool.name} className="bg-slate-900 p-1 pl-5 pr-5 rounded-lg text-sm">{tool.name}</button>
                })}
              </div>
                 <p className="mt-3 md:w-1/2">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {project.GithubLink && <button className="bg-gradient-to-r from-green-400/80 to-green-600/80 p-1 pl-5 pr-5 rounded-2xl text-xl"><a href={project.GithubLink} target="blank">Github Repository</a></button>}
                {project.DemoLink &&  <button className="bg-gradient-to-r from-blue-400/80 to-blue-600/80 p-1 pl-5 pr-5 rounded-2xl text-xl"><a href={project.DemoLink} target="blank">View Demo</a></button>}
            </div>
            <div className="w-full flex justify-center">
                <Image
                    src={urlFor(project.CoverImage).width(800).height(400).url()}
                    alt={project.CoverImage.alt || project.title}
                    width={1200}
                    height={200}
                    quality={100}
                    className="rounded-xl"
                />
            </div>
           
            
        </div>
    );
}