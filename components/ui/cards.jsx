import Image from "next/image";

export function ExperiencieCard({ name, role, time, location, description, skills }){

    return (
        <>
            <div className="card w-full h-auto flex flex-col p-6 gap-2 sm:gap-0 bg-neutral-900 rounded-2xl text-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h5 className="text-h6 sm:text-h5 font-bold">
                        {name}
                    </h5>
                    <h6 className="text-p sm:text-h6 font-medium">
                        {location}
                    </h6>
                </div>
                <div className="w-full h-auto flex flex-col justify-center text-[0.9rem] sm:text-[1.1rem] gap-2">
                    <h6 className="flex flex-col sm:flex-row text-h6 font-semibold text-purple-300 gap-1 sm:gap-5">
                        {role}
                        <span className="text-gray-400 font-medium text-p sm:text-h6">
                            - {time}
                        </span>
                    </h6>
                    <div className="flex flex-col gap-2">
                        {description.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start gap-2 pt-2 sm:pt-5">
                    {skills.map((skill, index) => (
                        <p key={index} className="text-sm1 sm:text-[0.9rem] rounded-md bg-neutral-600 py-1 px-2">{skill}</p>
                    ))}
                </div>
            </div>
        </>
    );
} 

export function ContactCard({ role, dev, firstName, secondName, mailIntro, email, emailLink, cvText, cvLink }){

    return(
        <>
            <div className="card w-[550px] h-[300px] bg-neutral-800 flex flex-row items-center justify-center overflow-hidden duration-300 group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_60deg)] shadow-lg  hover:shadow-2xl hover:shadow-purple-400 shadow-purple-400">
                <div className="flex flex-col w-full h-full items-start justify-center">
                    <div className="w-full h-2/5 p-5 flex flex-col justify-center">
                        <h5 className="text-[1.6rem] text-gray-50 font-extrabold gap-2 whitespace-pre">
                            <span className="text-neutral-400 brightness-110">{role}</span>{dev}
                        </h5>
                        <h6 className="text-h5 text-gray-50 font-extrabold gap-2 whitespace-pre">
                            <span className="text-neutral-400 brightness-110">{firstName}</span>{secondName}
                        </h6>
                    </div>
                    <div className="w-full h-3/5 bg-gray-200 p-5 flex flex-col justify-around gap-5">
                        <div className="text-neutral-800 font-semibold text-h6 flex flex-col w-3/5 h-1/2 ">
                            <span>{mailIntro}</span>
                            <div className="flex flex-row items-center justify-start flex-nowrap gap-2 text-h6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><g fill="currentColor"><path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z"/><path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z"/></g></svg>
                                <a href={emailLink} target="_blank" rel="noopener noreferrer" className="link link-hover font-medium rounded-lg">
                                    {email}
                                </a>
                            </div>
                        </div>
                        <div className="text-neutral-800 font-semibold text-h6 flex flex-col w-3/5 h-1/2 ">
                            <div className="flex flex-row items-center justify-start flex-nowrap gap-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 20 20"><g fill="currentColor"><path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"/><path fillRule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clipRule="evenodd"/><path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z" clipRule="evenodd"/><path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clipRule="evenodd"/></g></svg>
                                <a href={cvLink} target="_blank" rel="noopener noreferrer" className="btn bg-neutral-500 hover:bg-neutral-100 hover:text-neutral-500 text-neutral-100 px-4 py-0 font-semibold rounded-lg text-h6">
                                    {cvText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-auto h-auto ring-[16px] p-3 ring-neutral-500 rounded-full absolute -top-1 -right-24 flex items-center justify-center">
                    <div className="avatar relative w-[19rem] h-[19rem] flex items-center justify-center ring-[16px] ring-neutral-600 bg-inherit rounded-full">
                        <Image
                            src="https://unavatar.io/github/DevBryanSJ" 
                            alt="That's me!" 
                            fill
                            className="object-contain mask mask-circle bg-inherit" 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}