"use client";
import dynamic from 'next/dynamic'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseLine } from "react-icons/ri";


const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false
});

function Projects() {
  return (
    <div className="pt-16 pb-32">
        <h1 className="text-[38px] inter-extrabold ml-2">
            Projects
        </h1>
        <h1 className="grays2 text-base pb-6 ml-2">
            A showcase of my work.
        </h1>
        <a href='https://website-tahu-bulat.vercel.app'>
        <div className=' grays3bg rounded-3xl flex flex-col'>
                <ReactPlayer 
                    url='/video/VideoTahu.mp4'
                    controls={false}
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="auto"
                    style={{ 
                        userSelect: 'none', 
                        pointerEvents: 'none',
                        borderRadius: '20px',
                        overflow: 'hidden'
                    }}
                />
            
            
            <div className='p-6 pt-8 pb-6'>
                <h1 className='inter text-3xl'>
                    Tahu Bulat Website
                </h1>
                <p className='inter grays2 text-base pt-2 pb-3'>
                    A website for a restaurant.
                </p>
                <div className="flex flex-row gap-3 py-1 text-3xl ">
                    <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                        <FaReact />
                        <div className="text-sm inter">
                        React
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                        <RiTailwindCssFill />
                        <div className="text-sm inter">
                        Tailwind CSS
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                        <IoLogoJavascript />
                        <div className="text-sm inter">
                        JavaScript
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-2 grays py-2 px-3 rounded-md">
                        <RiSupabaseLine />
                        <div className="text-sm inter">
                        Supabase
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </a> 
    </div>  
  )
}

export default Projects;