import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import ExperienceEducation from './components/ExperienceEducation';
import UI from '../public/img/UI.png'


export default function Home() {
  return (
    <>
    <div className="h-screen w-screen grays">
      <div className="pt-32 px-64 flex flex-col gap-3">
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
        <div className="text-2xl inter flex grays2">
          <h1 className="mt-1"><IoLocationOutline /></h1>
          <h1>
           Jakarta, Indonesia
          </h1>
        </div>
      </div>
      <div className="flex">
        <ExperienceEducation />
      </div>
    </div>
    </>
  );
}
