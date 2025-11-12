import { icons, LucideIcon } from 'lucide-react'

interface CardItem {
    id: number,
    title: string,
    desc: string,
    icon: keyof typeof icons
}

const CardItems: CardItem[] = [
  { id: 1, title: "Front-End Development", desc: "", icon: "Code"},
  { id: 2, title: "Back-End Development", desc: "", icon: "Braces"},
  { id: 1, title: "UI/UX", desc: "", icon: "Wallpaper"},
]

export default function Cards() {
    return (
        <div className="flex flex-col lg:flex-row gap-10">
            {CardItems.map((item) => {
                const Icon: LucideIcon = icons[item.icon];
                return (
                    <div className="p-10 rounded-md flex flex-col items-center gap-2 bg-slate-800">
                        <Icon  size={"35"} className="text-green-300"/>
                        <h2 className="text-center text-xl">{item.title}</h2>
                        <p className="text-center">{item.desc}</p>
                    </div>
                )
            })}
        </div>
    );
}