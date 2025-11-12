import Link from "next/link";

export default function Resume() {
    return (
        <div className="min-h-screen p-20 pt-30 bg-gradient-to-b from-slate-900 to-slate-950 flex justify-center">
            <div className="w-3/4 bg-white p-10 text-black">
                <h1 className="text-5xl text-blue-400">Makayla Boyer</h1>
                <p className="text-xl">Freelance Web Developer</p>
                <div className="flex flex-col md:flex-row flex-wrap md:gap-10">
                    <p>Dayton, OH </p>
                    <p className="text-blue-400">•</p>
                    <Link href="https://makaylaboyer.com" className="hover:text-blue-400">makaylaboyer.com</Link>
                    <p className="text-blue-400">•</p>
                    <Link href="https://github.com/makayla1205" className="hover:text-blue-400">https://github.com/makayla1205</Link>
                </div>
                <p className="mt-3">Creative and detail-oriented freelance web developer specializing in modern JavaScript frameworks including 
                    React, Node.js, Express, and Next.js. Skilled in building responsive, user-focused websites and full-stack 
                    applications with clean, efficient code. Strong understanding of UI/UX principles, performance optimization, 
                    and scalable architecture. Passionate about continuous learning, collaboration, and delivering polished digital 
                    experiences that exceed client expectations.</p>

                <div className="mt-3">
                    <h1 className="text-2xl text-blue-400">Education</h1>
                    <hr className="text-blue-200"></hr>
                    <div className="flex flex-wrap justify-between mt-3">
                        <p className="font-bold">Bachelor of Computer Science</p>
                        <p>2018 - 2022</p>
                    </div>
                    <p>Northern Kentucky University</p>
                </div>

                <div className="mt-3">
                    <h1 className="text-2xl text-blue-400">Relevant Experience</h1>
                    <hr className="text-blue-200"></hr>
                    <div className="flex flex-wrap justify-between mt-3">
                        <p className="font-bold">Freelance Web Developer</p>
                        <p>2022 - Present</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Partnered with a local chapter of a nonprofit organization to build a data-driven dashboard using Express.js and web scraping tools, highlighting real-time organizational insights and key performance statistics.</li>
                        <li>Collaborated with the same nonprofit on the re-design and development of a WordPress website, focusing on modernization, accessible content structure and intuitive navigation (project completed but unpublished).</li>
                        <li>Designed and launched a Squarespace website for a mental health nonprofit, helping them establish an online presence to share community resources, events, and contact information.</li>
                        <li>Developed multiple personal projects using React, Next.js, and Express.js, showcasing expertise in frontend design, backend architecture, and full-stack application development.</li>
                        <li>Applied creative problem-solving and attention to UI/UX design to deliver engaging, functional web experiences for community-focused clients.</li>
                    </ul>
                </div>
                
                <div className="mt-3">
                    <h1 className="text-2xl text-blue-400">Skills</h1>
                    <hr className="text-blue-200"></hr>
                    <h3 className="mt-3 font-bold">Frontend Development</h3>
                    <ul className="list-disc list-inside">
                        <li>HTML5, CSS3, JavaScript, TypeScript</li>
                        <li>React.js, Next.js</li>
                        <li>Tailwind CSS, Bootstrap</li>
                        <li>Responsive Design & Cross-Browser Compatibility</li>
                        <li>UI/UX Implementation & Accessibility</li>
                    </ul>

                    <h3 className="font-bold">Backend Development</h3>
                    <ul className="list-disc list-inside">
                        <li>Node.js, Express.js</li>
                        <li>RESTful API Design</li>
                        <li>Authentication & Authorization</li>
                        <li>Database Integration (MongoDB, PostgreSQL, Supabase, MySQL)</li>
                        <li>API Integration & Server-Side Rendering</li>
                    </ul>

                    <h3 className="font-bold">Tools & Workflow</h3>
                    <ul className="list-disc list-inside">
                        <li>Git & GitHub / GitLab</li>
                        <li>VS Code, Postman, npm/yarn</li>
                        <li>CI/CD & Deployment (Vercel, Netlify)</li>
                        <li>Docker (basic knowledge)</li>
                        <li>Agile / Scrum Workflow</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}