import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { RiSupabaseLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { RxVercelLogo } from "react-icons/rx";




function TechStack() {
    return(
        <>
        <div className="pt-16 pb-32">
            <h1 className="inter-extrabold text-4xl">Tech Stack</h1>
            <h1 className="grays2 text-xl py-3">Tools, resources and software I use.</h1>
            <div className="w-full border-2 grays3border p-8 flex flex-col gap-4 rounded-md">
                <div className="flex flex-row gap-5">
                    <div className="text-4xl flex justify-center items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <FaHtml5 />
                        <div className="text-sm inter">
                        HTML
                        </div>
                    </div>
                    <div className="text-4xl flex justify-center items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <RiTailwindCssFill />
                        <div className="text-sm inter">
                        Tailwind CSS
                        </div>
                    </div>
                    <div className="text-4xl flex justify-center items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <FaReact />
                        <div className="text-sm inter">
                        React
                        </div>
                    </div>
                    <div className="text-4xl flex justify-center items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <TbBrandNextjs />
                        <div className="text-sm inter">
                        Next.js
                        </div>
                    </div>
                    <div className="text-4xl flex justify-center items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <IoLogoJavascript />
                        <div className="text-sm inter">
                        JavaScript
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                    <div className="text-4xl flex justify-center items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <IoLogoFirebase />
                        <div className="text-sm inter">
                        Firebase
                        </div>
                    </div>
                    <div className="text-4xl flex justify-center items-center gap-2 grays3bg py-2 px-3 rounded-md ml-1">
                        <RiSupabaseLine />
                        <div className="text-sm inter">
                        Supabase
                        </div>
                    </div>
                    <div className="text-4xl w-[106px] flex items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <FaGitAlt />
                        <div className="text-sm inter">
                        Git
                        </div>
                    </div>
                    <div className="text-4xl w-[114px] flex justify-center items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <IoLogoGithub />
                        <div className="text-sm inter">
                        Github
                        </div>
                    </div>
                    <div className="text-4xl w-[140px] flex items-center gap-2 grays3bg py-2 px-3 rounded-md">
                        <RxVercelLogo />    
                        <div className="text-sm inter">
                        Vercel
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default TechStack