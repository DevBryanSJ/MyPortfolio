"use client";

//imports

const text = {
    heroSection: {
        intro: "Hi! I'm ", 
        iam: "I'm a ",
        name: 'Bryan Sigala',
        role: 'Full-Stack ', 
        dev: 'Developer', 
        description: "In recent years, I've been invested in the IT developing world, more focused on web developing. I find a unique passion in developing detailed, intuitive, and innovative user interfaces (UI) and solutions using technologies to help all kinds of people and their needs. ",
        contact: 'Contact me',
    }
}

export default function HeroSection(){

    return (
        <>
            <div className="w-full h-screen flex items-center p-10 overflow-hidden bg-[#060108]">
                <div className="flex flex-col items-start h-auto w-[50vw] lg:ml-[10%] justify-center text-gray-100 z-20 ">
                    <h1 className="text-[5.2rem]  font-bold">
                        {text.heroSection.intro}
                        <span className="text-purple-300">
                            {text.heroSection.name}
                        </span>
                    </h1>
                    <h2 className="text-h3 font-semibold">
                        {text.heroSection.iam}
                        <span className="text-purple-300">
                            {text.heroSection.role}
                        </span>
                        {text.heroSection.dev}
                    </h2>
                    <p className="text-p font-semibold lg:max-w-[60%]">
                        {text.heroSection.description}
                    </p>
                    <button className="">
                        {text.heroSection.contact}
                    </button>
                </div>
                <div className="absolute inset-0 ml-auto h-full lg:w-[60vw] flex justify-end items-center">
                    <video 
                        src="https://cdn.pixabay.com/video/2024/09/03/229467_large.mp4" autoPlay loop muted
                        className="object-cover w-full h-full opacity-100 filter brightness-110"
                    />
                </div>
            </div>
        </>
    );
}