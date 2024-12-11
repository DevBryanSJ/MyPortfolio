


export function ExperiencieCard({ name, role, time, location, description, skills }){

    return (
        <>
            <div className="card w-full h-auto flex flex-col p-6 bg-neutral-800 rounded-2xl text-gray-200">
                <div className="flex flex-col w-full h-auto">
                    <div className="flex flex-row items-center justify-between">
                        <h5 className="text-h5 font-bold">
                            {name}
                        </h5>
                        <h6 className="text-h6 font-medium">
                            {location}
                        </h6>
                    </div>
                    
                </div>
                <div className="w-full h-auto flex flex-col justify-center lg:text-[1.1rem] gap-2">
                    <h6 className="flex flex-row text-h6 font-semibold text-purple-300 gap-5">
                        {role}
                        <span className="text-gray-400 font-medium">
                            - {time}
                        </span>
                    </h6>
                    <div className="flex flex-col gap-2">
                        {description.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start gap-2 pt-5">
                    {skills.map((skill, index) => (
                        <p key={index} className="text-[0.9rem] rounded-lg bg-neutral-600 py-1 px-2">{skill}</p>
                    ))}
                </div>
            </div>
        </>
    );
}