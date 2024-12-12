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

export function ContactCard(){

    return(
        <>
            <div className="card w-[550px] h-[300px] bg-neutral-800 flex flex-row items-center justify-center overflow-hidden duration-300 group hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_60deg)] shadow-lg hover:shadow-2xl hover:shadow-white shadow-white">
                <div className="flex flex-col w-full h-full items-start justify-center">
                    <div className="w-full h-2/5 p-5 flex flex-col justify-center">
                        <h5 className="text-[1.6rem] text-gray-50 font-extrabold gap-2 whitespace-pre">
                            <span className="text-neutral-400">Full Stack </span>Developer
                        </h5>
                        <h6 className="text-[1.6rem] text-gray-50 font-extrabold gap-2 whitespace-pre">
                            <span className="text-neutral-400">Bryan </span>Sigala
                        </h6>
                    </div>
                    <div className="w-full h-3/5 bg-neutral-400 p-5 flex flex-col justify-around ">
                        <button className="btn w-1/2 link bg-gray-50 rounded-xl flex py-2 text-[1.2rem]">
                            bryansigala@hotmail.com
                        </button>
                        <button className="btn w-1/2 link bg-gray-50 rounded-xl flex py-2 text-[1.2rem]">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="w-auto h-auto ring-[16px] p-3 ring-neutral-500 rounded-full absolute -top-1 -right-24 flex items-center justify-center">
                    <div className="avatar relative w-[19rem] h-[19rem] flex items-center justify-center ring-[16px] ring-neutral-600 bg-inherit rounded-full">
                        <Image
                            src="https://unavatar.io/github/StellarDBryan"
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