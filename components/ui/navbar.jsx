"use client";

export default function Navbar({ content, cvText, cvLink, socialLinks}){

    return (
        <>
            <nav className="fixed bottom-0 md:top-0 z-50 bg-neutral-950/50 backdrop-blur-md drop-shadow-xl flex flex-row items-center justify-around py-5 px-10 h-20 w-full">
                <div className="hidden md:flex flex-row items-center justify-between w-full">
                    <a href="/#hero_section">
                        <button className="btn bg-inherit border-none hover:bg-opacity-30 -space-x-10 p-0 w-20 text-gray-50 font-extrabold text-h3">
                            <span className="text-purple-300 -mr-2">B</span>S
                        </button>
                    </a>
                    <div className="flex flex-row justify-around gap-5">
                        <a href="/#about">
                            <button className="w-auto h-auto btn bg-inherit hover:bg-inherit text-gray-50 text-h6 shadow-none border-0 border-purple-300 rounded-none p-2 hover:border-b-2 hover:border-purple-300 hover:text-purple-300 focus:border-b-2 focus:border-purple-300 focus:text-purple-300">
                                {content.about}
                            </button>
                        </a>
                        <a href="/#projects">
                            <button className="w-auto h-auto btn bg-inherit hover:bg-inherit text-gray-50 text-h6 shadow-none border-0 border-purple-300 rounded-none p-2 hover:border-b-2 hover:border-purple-300 hover:text-purple-300 focus:border-b-2 focus:border-purple-300 focus:text-purple-300">
                                {content.projects}
                            </button>
                        </a>
                        <a href="/#experience">
                            <button className="w-auto h-auto btn bg-inherit hover:bg-inherit text-gray-50 text-h6 shadow-none border-0 border-purple-300 rounded-none p-2 hover:border-b-2 hover:border-purple-300 hover:text-purple-300 focus:border-b-2 focus:border-purple-300 focus:text-purple-300">
                                {content.experience}
                            </button>
                        </a>
                        <a href="/#contact">
                            <button className="w-auto h-auto btn bg-inherit hover:bg-inherit text-gray-50 text-h6 shadow-none border-0 border-purple-300 rounded-none p-2 hover:border-b-2 hover:border-purple-300 hover:text-purple-300 focus:border-b-2 focus:border-purple-300 focus:text-purple-300">
                                {content.contact}
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-row justify-around gap-3">
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-circle btn-ghost text-gray-50 hover:text-purple-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                            </button>
                        </a>
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-circle btn-ghost text-gray-50 hover:text-purple-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                            </button>
                        </a>
                        <a href={socialLinks.x} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-circle btn-ghost text-gray-50 hover:text-purple-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#primeTwitter0)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="primeTwitter0"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
                            </button>
                        </a>
                        <a href={cvLink} target="_blank" rel="noopener noreferrer">
                            <button className="flex flex-row btn bg-inherit hover:bg-inherit text-h6 text-gray-50 hover:text-purple-300 shadow-none border-0 border-purple-300 rounded-none p-2 hover:border-b-2 hover:border-purple-300 focus:border-b-2 focus:border-purple-300 focus:text-purple-300">
                                {cvText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"/></svg>
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}