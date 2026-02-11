import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
// Ensure this is imported if you use the search feature later

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-16">
      
      {/* 1. HEADER & BIO */}
      <section className="space-y-6 mt-12">
        <div className="flex items-center gap-4">
            {/* Profile Image Placeholder */}
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                {/* <Image src="/me.jpg" width={48} height={48} alt="Me" /> */}
            </div>
            <div>
                <h1 className="text-xl font-bold">Dhruv <span className="font-normal text-gray-500 italic">aka @dhruv9097</span></h1>
            </div>
        </div>

        <div className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
          <p className="mb-4">
            I'm probably a product designer and AI/ML <span className="italic underline decoration-gray-400 underline-offset-4">Enthusiast</span>. 
            Over the past few days, I've focused on designing beautiful software that people might love to use.
          </p>
          <p>
            When I'm not designing, I love shooting street <span className="italic underline decoration-gray-400 underline-offset-4">photography</span> with my Moto G54.
          </p>
        </div>

        {/* Minimal Social Links */}
        <div className="flex gap-6 text-sm italic text-gray-500">
            <a href="https://github.com/dhruv9097" className="hover:text-black dark:hover:text-white hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/dhruv-singh-9551b1286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-black dark:hover:text-white hover:underline">LinkedIn</a>
        </div>
      </section> 

      {/* THE SIGNATURE DOTS */}
      <div className="flex justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
      </div>

      {/* 2. PROJECTS */}
      <section>
        <h2 className="font-bold text-xl mb-6">Projects</h2>
        <div className="space-y-4">
            
            {/* NEW ADDITION 👇 */}
            <ProjectItem 
                title="GitHub Trending" 
                desc="Real-time tracker for trending repositories" 
                link="https://github.com/dhruv9097/github-trending" 
            />

            <ProjectItem 
                title="Portfolio V1" 
                desc="Minimalist static site generator" 
                link="https://github.com/dhruv9097/sorted_blog" 
            />
            
            <ProjectItem 
                title="Login Page" 
                desc="Login Page & Dashboard" 
                link="https://github.com/dhruv9097/login_page" 
            />
            
        </div>
      </section>

    </div>
  );
}

// Minimal Project Item Component
function ProjectItem({ title, desc, link }: { title: string, desc: string, link: string }) {
    return (
        <a href={link} target="_blank" className="block group">
            <div className="flex justify-between items-baseline">
                <span className="text-lg group-hover:italic group-hover:underline decoration-gray-500 underline-offset-4">
                    {title}
                </span>
                <span className="text-sm text-gray-500 hidden sm:inline-block">
                    {desc} ↗
                </span>
            </div>
        </a>
    )
}