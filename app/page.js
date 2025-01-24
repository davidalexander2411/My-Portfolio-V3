import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import ExperienceEducation from './components/ExperienceEducation';
import UI from '../public/img/UI.png'
import TechStack from './components/TechStack';


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
        <div className="text-xl inter flex grays2">
          <h1 className="mt-1"><IoLocationOutline /></h1>
          <h1>
           Jakarta, Indonesia
          </h1>
        </div>
        <ExperienceEducation />
        <TechStack />
      </div>
    </div>
    </>
  );
}
