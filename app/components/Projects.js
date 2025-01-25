"use client";
import dynamic from 'next/dynamic'
import { FaReact } from "react-icons/fa";


const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false
});

function Projects() {
  return (
    <div className="pt-16 pb-32">
        <h1 className="text-[32px] inter-extrabold">
            Projects
        </h1>
        <h1 className="grays2 text-base pb-4">
            A showcase of my work.
        </h1>
        <div className='h-[600px] grays3bg rounded-lg flex flex-col'>
            <div className=''>
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
                        borderRadius: '12px',
                        overflow: 'hidden'
                    }}
                />
            </div>
            <div className='p-6'>
                <h1 className='inter text-3xl'>
                    Tahu Bulat Website
                </h1>
                <p className='inter grays2 text-base py-2'>
                    A website for a restaurant.
                </p>
            </div>
        </div> 
    </div>  
  )
}

export default Projects;