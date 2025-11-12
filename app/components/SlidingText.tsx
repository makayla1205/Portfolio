'use client'
import { useEffect, useState } from 'react';

export default function SlidingText() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="">
        <div className="m-10">
            <div className="animate-slide-fast inline-flex w-max">
                <span className="text-5xl text-cyan-400 flex items-center">
                    <span className="mx-4">Fast scrolling</span>
                    <span className="mx-4">Next.js</span>
                    <span className="mx-4">React</span>
                    <span className="mx-4">TypeScript</span>
                    <span className="mx-4">Tailwind CSS</span>
                </span>
                <span className="text-5xl text-cyan-400 flex items-center" aria-hidden="true">
                    <span className="mx-4">Fast scrolling</span>
                    <span className="mx-4">Next.js</span>
                    <span className="mx-4">React</span>
                    <span className="mx-4">TypeScript</span>
                    <span className="mx-4">Tailwind CSS</span>
                </span>
            </div>
        </div>

        <div className="m-10">
            <div className="animate-slide-medium inline-flex w-max">
              <span className="text-5xl text-purple-400 flex items-center">
                <span className="mx-4">Build amazing apps</span>
                <span className="mx-4">Server Components</span>
                <span className="mx-4">API Routes</span>
                <span className="mx-4">Optimization</span>
              </span>
              <span className="text-5xl text-purple-400 flex items-center" aria-hidden="true">
                <span className="mx-4">Build amazing apps</span>
                <span className="mx-4">Server Components</span>
                <span className="mx-4">API Routes</span>
                <span className="mx-4">Optimization</span>
              </span>
            </div>
        </div>

        <div className="m-10">
            <div className="animate-slide-slow inline-flex w-max">
              <span className="text-5xl text-emerald-400 flex items-center">
                <span className="mx-4">Deploy faster</span>
                <span className="mx-4">Performance</span>
                <span className="mx-4">SEO</span>
                <span className="mx-4">Developer Experience</span>
                <span className="mx-4">Production Ready</span>
              </span>
              <span className="text-5xl text-emerald-400 flex items-center" aria-hidden="true">
                <span className="mx-4">Deploy faster</span>
                <span className="mx-4">Performance</span>
                <span className="mx-4">SEO</span>
                <span className="mx-4">Developer Experience</span>
                <span className="mx-4">Production Ready</span>
              </span>
            </div>
        </div>

        <div className="m-10">
            <div className="animate-slide-right inline-flex w-max">
              <span className="text-5xl text-orange-400 flex items-center">
                <span className="mx-4">Responsive Design</span>
                <span className="mx-4">Engaging</span>
                <span className="mx-4">Seamless</span>
              </span>
              <span className="text-5xl text-orange-400 flex items-center" aria-hidden="true">
                <span className="mx-4">Responsive Design</span>
                <span className="mx-4">Engaging</span>
                <span className="mx-4">Seamless</span>
              </span>
            </div>
        </div>



      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-slide-fast {
          animation: slide-left 20s linear infinite;
        }

        .animate-slide-medium {
          animation: slide-left 30s linear infinite;
        }

        .animate-slide-slow {
          animation: slide-left 40s linear infinite;
        }

        .animate-slide-right {
          animation: slide-right 25s linear infinite;
        }
      `}</style>
    </div>
  );
}