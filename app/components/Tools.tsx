import Image from "next/image";

interface Tools {
    id: number,
    name: string,
    logo: string
}

const ToolItems: Tools[] = [
    {id: 1, name: "React", logo:"react.png"},
    {id: 2, name: "Nextjs", logo:"nextjs.png"},
    {id: 3, name: "Nodejs", logo:"node.png"},
    {id: 4, name: "Expressjs", logo:"expressjs.svg"},
    {id: 5, name: "Javascript", logo:"javascript.webp"},
    {id: 6, name: "Typescript", logo:"typescript.png"},
    {id: 7, name: "Tailwind", logo:"tailwind.png"},
    {id: 8, name: "Shadcn UI", logo:"shadcn.png"},
    {id: 9, name: "Sanity.io", logo:"sanity.png"},
    {id: 10, name: "Supabase", logo:"supabase.png"},
]

export default function Tools() {
    return (
        <div className="flex flex-row flex-wrap gap-10 mt-10 justify-center">
            {ToolItems.map((i)=> {
                return (
                    <div key={i.id} className="flex flex-row gap-5 items-center border border-slate-900 w-50 pt-1 pb-1 pl-5 pr-5 rounded-3xl justify-center bg-gradient-to-r from-blue-900 to-purple-900">
                        <Image
                            src={`/images/${i.logo}`}
                            alt={i.name || ""}
                            height={30}
                            width={40}
                            className=""
                        />
                        <p className="text-xl">{i.name}</p>
                    </div>
                )
            })}
        </div>
    );
}