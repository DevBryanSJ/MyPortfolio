


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