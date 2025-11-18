"use client";

import { NavMobileBtn } from "../atoms/buttons/navMobileBtn";
import { NavSectionBtn } from "../atoms/buttons/navSectionBtn";
import { NavSocialBtn } from "../atoms/buttons/navSocialBtn";

export default function Navbar({ content, cvText, cvLink, socialLinks}){

    return (
        <>
            <nav className="fixed top-0 z-50 bg-neutral-950/50 backdrop-blur-md drop-shadow-xl flex flex-row items-center justify-around py-1 px-10 md:py-5 md:px-6 h-16 md:h-20 w-full">
                <div className="flex flex-row items-center justify-end md:justify-between w-full">
                    <a href="/#hero_section" className="hidden md:inline">
                        <button className="btn bg-inherit border-none hover:bg-opacity-30 -space-x-10 p-0 w-20 text-gray-50 font-extrabold sm:text-h4 lg:text-h3">
                            <span className="text-purple-300 -mr-2">B</span>S
                        </button>
                    </a>
                    <div className="hidden md:flex flex-row flex-wrap lg:flex-nowrap w-auto justify-around gap-2 lg:gap-5">
                        <NavSectionBtn link={`/#about`}>
                            {content.about}
                        </NavSectionBtn>
                        <NavSectionBtn link={`/#projects`}>
                            {content.projects}
                        </NavSectionBtn>
                        <NavSectionBtn link={`/#experience`}>
                            {content.experience}
                        </NavSectionBtn>
                        <NavSectionBtn link={`/#contact`}>
                            {content.contact}
                        </NavSectionBtn>
                    </div>
                    <div className="flex flex-row justify-end md:justify-around space-x-2 md:space-x-0 gap-2 sm:gap-1 lg:gap-3 w-full md:w-auto">
                        <NavSocialBtn link={socialLinks.linkedin} isOnlyIcon={true}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" 
                                className="object-contain">
                                    <path fill="currentColor" 
                                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                            </svg>
                        </NavSocialBtn>
                        <NavSocialBtn link={socialLinks.github} isOnlyIcon={true}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="object-contain">
                                <path fill="currentColor" 
                                    d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                            </svg>
                        </NavSocialBtn>
                        <a href={cvLink} target="_blank" rel="noopener noreferrer">
                            <button type="button"
                                className={`flex flex-row btn bg-transparent text-p text-gray-50 shadow-none border-b-2 border-x-0 border-t-0 border-transparent rounded-none p-2 
                                    sm:text-h6 md:text-p lg:text-h6
                                    hover:border-purple-300 hover:bg-inherit hover:text-purple-300
                                    focus:border-b-2 focus:border-purple-300 focus:text-purple-300`}>
                                {cvText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="object-contain"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"/></svg>
                            </button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
} 

export function MobileNav(){

    return (
        <>
            <nav className="fixed bottom-0 z-50 bg-neutral-950/50 backdrop-blur-md drop-shadow-xl flex flex-row md:hidden items-center justify-around py-1 md:py-5 px-5 h-16 md:h-20 w-full">
                <NavMobileBtn link={'/#hero_section'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>
                </NavMobileBtn>
                <NavMobileBtn link={'/#about'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M2.5 20v-.685c0-.685.498-1.483 1.114-1.784l5.66-2.762c.821-.4 1.012-1.288.42-1.99l-.362-.429C8.596 11.478 8 9.85 8 8.71V7a4 4 0 0 1 8 0v1.71c0 1.14-.6 2.773-1.332 3.642l-.361.428c-.59.699-.406 1.588.419 1.99l5.66 2.762c.615.3 1.114 1.093 1.114 1.783V20a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1"/></svg>
                </NavMobileBtn>
                <NavMobileBtn link={'/#projects'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="currentColor" d="M4 5H.78c-.37 0-.74.32-.69.84l1.56 9.99S3.5 8.47 3.86 6.7c.11-.53.61-.7.98-.7H10s-.7-2.08-.77-2.31C9.11 3.25 8.89 3 8.45 3H5.14c-.36 0-.7.23-.8.64C4.25 4.04 4 5 4 5m4.88 0h-4s.42-1 .87-1h2.13c.48 0 1 1 1 1M2.67 16.25c-.31.47-.76.75-1.26.75h15.73c.54 0 .92-.31 1.03-.83c.44-2.19 1.68-8.44 1.68-8.44c.07-.5-.3-.73-.62-.73H16V5.53c0-.16-.26-.53-.66-.53h-3.76c-.52 0-.87.58-.87.58L10 7H5.59c-.32 0-.63.19-.69.5c0 0-1.59 6.7-1.72 7.33c-.07.37-.22.99-.51 1.42M15.38 7H11s.58-1 1.13-1h2.29c.71 0 .96 1 .96 1"/></svg>
                </NavMobileBtn>
                <NavMobileBtn link={'/#experience'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.5 9h-1m5 0h-1m-3-3h-1m5 0h-1m9 9h-1m1-4h-1M14 8v14h4c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8zm0 0c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8v2m6.025 3.955a2 2 0 1 1-3.999-.002a2 2 0 0 1 3.999.002M2.07 20.21c1.058-1.628 2.739-2.238 3.955-2.237s2.847.609 3.906 2.237c.068.105.087.235.025.344c-.247.439-1.016 1.31-1.57 1.368c-.639.068-2.307.078-2.36.078s-1.773-.01-2.41-.078c-.556-.059-1.324-.929-1.572-1.368a.33.33 0 0 1 .026-.344" color="currentColor"/></svg>
                </NavMobileBtn>
                <NavMobileBtn link={'/#contact'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"/><path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"/></g></svg>
                </NavMobileBtn>
            </nav>
        </>
    );
}