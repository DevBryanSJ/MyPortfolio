"use client";

//imports
import { SpaceButton } from "../ui/buttons";

const text = {
    heroSection: {
        intro: "Hi! I'm ", 
        iam: "I'm a ",
        name: 'Bryan Sigala',
        role: 'Full Stack ', 
        dev: 'Developer', 
        description: "In recent years, I've been invested in the IT developing world, more focused on web developing. I find a unique passion in developing detailed, intuitive, and innovative user interfaces (UI) and solutions using technologies to help all kinds of people and their needs. ",
        contact: 'Contact me',
    }, 
    about: {
        title: "About Me ", 
        description: {
            p1: "Hi! I'm Bryan Sigala, a Full-Stack Developer passionate about technology, video games, and unique stories. Even though I’m more focused on web development, I enjoy exploring new ways to combine creativity and functionality in every project I work on.", 
            p2: "Currently, I’m working at the Chihuahua IT Cluster (CITC), where I’m developing their Landing Page and other key projects to strengthen their technological ecosystem. I also provide technical support to ensure the smooth operation of their technological initiatives.", 
            p3: "I firmly believe in the power of teamwork. I enjoy helping my teammates improve their technical skills while learning from them as well. I’m also known for listening before speaking, always striving to understand problems from different perspectives to find the best possible solution.", 
            p4: "I’m inspired by geek culture and works that tell fascinating stories, which influence the way I create projects with impact and creativity. I’m always open to new opportunities and collaborations. If you have something in mind, let’s connect and make it a reality!", 
        }
    },
}

export default function HeroSection(){

    return (
        <>
            <div className="w-full h-screen flex items-start sm:px-[10vw] md:px-10 overflow-hidden bg-[#060108]">
                <div className="flex flex-col items-start h-screen w-full pl-[15vw] sm:pl-0 gap-y-2 sm:gap-y-0 sm:w-[80vw] md:w-[60vw] lg:ml-[5%] justify-center text-gray-100 z-20 bg-gradient-to-r from-[#060108] from-20% sm:from-50% md:from-40% lg:from-70%">
                    <h1 className="lg:text-[4rem] text-h4 sm:text-h3 md:text-h2 xl:text-[5rem]  font-extrabold">
                        {text.heroSection.intro}
                        <span className="text-purple-300">
                            {text.heroSection.name}
                        </span>
                    </h1>
                    <h2 className="text-h6 sm:text-h5 font-semibold">
                        {text.heroSection.iam}
                        <span className="text-purple-300">
                            {text.heroSection.role}
                        </span>
                        {text.heroSection.dev}
                    </h2>
                    <p className="text-sm1 md:text-p font-medium max-w-[70%] sm:max-w-[60%] lg:max-w-[60%]">
                        {text.heroSection.description}
                    </p>
                    <SpaceButton>
                        {text.heroSection.contact}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" className="transform group-hover:translate-x-2 transition-all ease-in-out duration-200">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path strokeDasharray="20" strokeDashoffset="20" d="M3 12h17.5">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/>
                                </path>
                                <path strokeDasharray="12" strokeDashoffset="12" d="M21 12l-7 7M21 12l-7 -7">
                                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/>
                                </path>
                            </g>
                        </svg>
                    </SpaceButton>
                </div>
                <div className="absolute inset-0 ml-auto h-full w-[80vw] sm:w-[60vw] md:w-[60vw] flex justify-end items-center">
                    <video 
                        src="https://cdn.pixabay.com/video/2024/09/03/229467_large.mp4" autoPlay loop muted
                        className="object-cover w-full h-full opacity-90 md:opacity-70 lg:opacity-90 filter brightness-110 sm:brightness-125"
                    />
                </div>
            </div>
        </>
    );
}

export function About(){

    return(
        <>
            <section className="w-full h-screen flex flex-col items-center justify-center">
                <div className="flex flex-row w-[80vw] h-[10vh] p-5 gap-10 items-center justify-start ">
                    <h2 className="text-h2 font-extrabold text-gray-50 text-nowrap">{text.about.title}</h2>
                    <div className="h-[0.2rem] w-full rounded-full bg-purple-300" />
                </div>
                <div className="flex flex-row w-[80vw] h-auto items-center justify-center border border-solid border-white">
                    <div className="flex flex-col justify-center items-start h-auto p-5">
                        <div className="flex flex-col lg:w-[55%] h-auto text-[1.05rem] font-medium text-gray-50">
                            <div className="w-full h-auto flex flex-col gap-4">
                                {Object.values(text.about.description).map((p, index) => (
                                    <p key={index}>{p}</p>
                                ))}
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}