import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-16">
      
      {/* 1. HEADER & BIO (Matches Screenshot) */}
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
            I'm pobably product designer and founder building <span className="italic underline decoration-gray-400 underline-offset-4">Peerlist</span> and <span className="italic underline decoration-gray-400 underline-offset-4">AutoSend</span>. 
            Over the past few days, I've focused on designing beautiful software that people might love to use.
          </p>
          <p>
            When I'm not designing, I love shooting street <span className="italic underline decoration-gray-400 underline-offset-4">photography</span> on film with my Moto G54.
          </p>
        </div>

        {/* Minimal Social Links (Text based to fit the vibe) */}
        <div className="flex gap-6 text-sm italic text-gray-500">
            <a href="https://github.com/dhruv9097" className="hover:text-black dark:hover:text-white hover:underline">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-black dark:hover:text-white hover:underline">LinkedIn</a>
            <a href="https://twitter.com" className="hover:text-black dark:hover:text-white hover:underline">Twitter/X</a>
        </div>
      </section>

      {/* THE SIGNATURE DOTS */}
      <div className="flex justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
      </div>

      {/* 2. PROJECTS (Styled as a minimal list, not cards) */}
      <section>
        <h2 className="font-bold text-xl mb-6">Projects</h2>
        <div className="space-y-4">
            <ProjectItem 
                title="Portfolio V1" 
                desc="Minimalist static site generator" 
                link="https://github.com" 
            />
            <ProjectItem 
                title="NLP Analyzer" 
                desc="Python sentiment analysis tool" 
                link="https://github.com" 
            />
             <ProjectItem 
                title="Fitness Tracker" 
                desc="Full-stack workout logger" 
                link="https://github.com" 
            />
        </div>
      </section>

      {/* 3. WRITING SECTION */}
      <section>
        <h2 className="font-bold text-xl mb-6">Writing</h2>
        {/* Pass data to search, but we need to style PostSearch to match this vibe too. 
            For now, let's just list them simply to match the screenshot. */}
        <div className="space-y-4">
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} key={id} className="group flex justify-between items-baseline">
                <h3 className="text-lg group-hover:italic group-hover:underline decoration-gray-500 underline-offset-4">
                  {title}
                </h3>
                <span className="text-sm text-gray-500 font-sans">{date}</span>
            </Link>
          ))}
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