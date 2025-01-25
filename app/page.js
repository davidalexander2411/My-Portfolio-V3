import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import ExperienceEducation from './components/ExperienceEducation';
import UI from '../public/img/UI.png'
import TechStack from './components/TechStack';
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";



export default function Home() {
  return (
    <>
    <div className="h-screen w-screen grays flex justify-center overflow-x-hidden">
      <div className="w-[800px] flex flex-col gap-3 pt-32">
        <div className="inter-bold text-5xl">
          <h1 className="mr-2">
            David Alexander,
          </h1> 
          <div className="flex pt-3">
            <h1 className="mr-3">
              Front-End
            </h1>
            <h1 className="grays2">
              Developer.
            </h1>
          </div>
        </div>
        <div className="text-xl inter flex flex-col grays2">
          <div className="flex flex-row">
            <h1 className="mt-1"><IoLocationOutline /></h1>
            <h1>
            Jakarta, Indonesia
            </h1>
          </div>
          <div className="flex flex-row text-5xl pt-3 gap-2 items-center">
            <a href="https://www.instagram.com/david.alexander24"><FaInstagram /></a>
            <a href="https://www.github.com/davidalexander2411"><IoLogoGithub /></a>
            <a className="text-[52px]" href="https://www.linkedin.com/in/david-alexander-3a3601325/"><AiOutlineLinkedin/></a>
          </div>
        </div>
        <ExperienceEducation />
        <TechStack />
      </div>
    </div>
    </>
  );
}
