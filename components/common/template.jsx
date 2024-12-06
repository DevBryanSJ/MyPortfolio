"use client";

//imports

const text = {
    heroSection: {
        intro: "Hi! I'm ", 
        name: 'Bryan Sigala',
        role: 'Full-Stack ', 
        dev: 'Developer'
    }
}

export default function HeroSection(){

    return (
        <>
            <div className="w-full h-screen flex items-center p-10 overflow-hidden bg-black">
                <video 
                    src="https://cdn.pixabay.com/video/2024/09/03/229467_large.mp4" autoPlay loop muted
                    className="w-full h-full object-cover absolute inset-0 opacity-85 ml-[20rem]"
                />
                <div className="flex flex-col items-start h-auto w-auto justify-center text-gray-100 z-20">
                    <h1 className="text-[5.2rem]  font-bold">
                        {text.heroSection.intro}
                        <span className="text-purple-300">
                            {text.heroSection.name}
                        </span>
                    </h1>
                    <h2 className="text-h3 font-semibold text-purple-300">
                        {text.heroSection.role}
                        <span className=" text-gray-100">
                            {text.heroSection.dev}
                        </span>
                    </h2>
                </div>
            </div>
        </>
    );
}