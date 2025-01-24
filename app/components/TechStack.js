import { FaHtml5 } from "react-icons/fa";


function TechStack() {
    return(
        <>
        <div className="pt-32">
            <h1 className="inter-extrabold text-4xl">Tech Stack</h1>
            <h1 className="grays2 text-xl py-3">Tools, resources and software I use</h1>
            <div className="w-full border-2 grays3border p-8 rounded-md flex flex-row">
                <div className="text-4xl w-24 flex justify-center items-center gap-2 grays3bg p-2 rounded-md">
                    <FaHtml5 />
                    <div className="text-sm inter">
                    HTML
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TechStack