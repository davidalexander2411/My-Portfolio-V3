    "use client";
    import React, { useState } from 'react';
    import { IoLocationOutline, IoSchoolOutline, IoBusinessOutline } from 'react-icons/io5';
   

    const ExperienceEducation = () => {
        const [activeSection, setActiveSection] = useState('Experience')

        const ExperienceData = [
            {
                title: "Software Developer Intern",
                institution: "Exercise FTUI",
                duration: "Oct 2024 - Nov 2024",
                photo: "/img/exercise.png"
            }
        ];

        const EducationData = [
            {
                institution: "University of Indonesia",
                study: "Bachelor of Computer Engineering",
                duration: "Aug 2024 - Now",
                photo: "/img/UI.png"

            },
            {
                institution: "SMA Tunas Bangsa",
                study: "Science",
                duration: "Aug 2021 - Aug 2024",
                photo: "/img/TB.png"

            },
        ];
        return (
            <>
                <div className="w-full flex flex-col justify-center items-center gap-4 p-24">
                    <div className='w-[700px] flex flex-col justify-center items-center gap-4'>
                        <div className="w-full h-8 grays2bg text-white flex justify-center p-1 rounded-lg">
                            <div className='w-1/2 flex justify-center'>
                                <button 
                                className={`p-1 w-full inter flex items-center text-sm rounded-md justify-center 
                                    ${activeSection === 'Experience' ? `grays` : `grays2bg`}`}onClick={() => setActiveSection('Experience')}
                                >Experience
                                </button>
                            </div>
                            
                            <div className='w-1/2 flex justify-center'>
                                <button 
                                className={`p-1 w-full inter flex items-center text-sm rounded-md justify-center ${activeSection === 'Education' ? `grays` : `grays2bg`}`}
                                onClick={() => setActiveSection('Education')}
                                >Education
                                </button>
                            </div>
                        </div>
                        <div 
                            key={activeSection}
                            className={`w-full border-[1px] inter border-white rounded-lg 
                                        ${activeSection === 'Education' || 'Experience' ? `animate-fade-in` : ``}`}
                            >{(activeSection === 'Experience' ? ExperienceData : EducationData).map((item, index) => (
                                <div key={index} className="flex items-center p-4 gap-2">
                                    <img src={item.photo} className='w-10 h-10'></img>
                                    <div>
                                        <h1 className='text-xs grays2'>{item.duration}</h1>
                                        <h1 className='text-md inter-bold'>{item.institution}</h1>
                                        <h1 className='text-sm grays2'>{item.title || item.study}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    };

    export default ExperienceEducation;
