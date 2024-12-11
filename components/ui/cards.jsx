

const experience = {
    jobs: [
        {
            name: "Chihuahua IT Cluster", 
            role: "IT Intern", 
            time: "August 2024 - At Present",
            location: "Chihuahua, Mexico.", 
            description: [
                "Diseñé esta herramienta para optimizar el flujo de trabajo de los desarrolladores, integrando funciones clave y un diseño enfocado en la productividad.", 
                "Un sitio web diseñado para crear experiencias de viaje personalizadas, con ofertas irresistibles y una interfaz fluida.", 
            ], 
            skils: [
                'Next.js', 'TailwindCSS', 'Atomic Design', 'UI Design', 'Figma', 'Communication', 'Talent recruitment', 'Instructor'
            ],
        }
    ]
}

export function ExperiencieCards(){

    return (
        <>
            <div className="card w-full h-auto flex flex-col p-6 bg-neutral-800 rounded-2xl">
                <div className="flex flex-col w-full h-auto">
                    <div className="flex flex-row items-center justify-between">
                        <h5>
                            {experience.jobs[0].name}
                        </h5>
                        <h6>
                            {experience.jobs[0].location}
                        </h6>
                    </div>
                    
                </div>
                <div className="w-full h-auto flex flex-col justify-center lg:text-[1.1rem]">
                    <h6 className="flex flex-row">
                        {experience.jobs[0].role} {experience.jobs[0].time}
                    </h6>
                    {experience.jobs[0].description.map((p, index) => (
                        <p key={index}>{p}</p>
                    ))}
                </div>
            </div>
        </>
    );
}