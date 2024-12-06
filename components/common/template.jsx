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
            <div className="w-full h-screen flex items-center p-10">
                <div className="flex flex-col items-start h-auto w-auto justify-center text-gray-100">
                    <h1 className="text-h1  font-bold">
                        {text.heroSection.intro}
                        <span className="text-purple-300">
                            {text.heroSection.name}
                        </span>
                    </h1>
                    <h2 className="text-h2 font-semibold">
                        {text.heroSection.role}
                        <span>
                            {text.heroSection.dev}
                        </span>
                    </h2>
                </div>
            </div>
        </>
    );
}