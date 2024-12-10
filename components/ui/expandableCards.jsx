"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";

const content = {
    action: "Read more ",
    projects: [
        {
            name: "Project Name Here", 
            img: 'https://img.freepik.com/foto-gratis/desarrollador-independiente-sonriente-oficina-casa-haciendo-programacion-computadora_482257-83067.jpg?t=st=1733804942~exp=1733808542~hmac=153d62befc9fa0967c3e240310736281db72ba0775f4086a0dfd8a33dba79deb&w=1060',
            skills: ['Next.js', 'TailwindCSS', 'HTML5', 'CSS3', 'DaisyUI', 'Teamwork', 'Communication'], 
            intro: "Desarrollé esta aplicación educativa para descubrir exoplanetas, combinando diseño intuitivo y datos científicos en tiempo real. ¡Aprender nunca fue tan fascinante!", 
            description: [
                "Exo-Finder es una aplicación educativa creada para facilitar la exploración de exoplanetas fuera de nuestro sistema solar. Su objetivo es hacer que el aprendizaje sobre astronomía sea accesible y atractivo, utilizando datos científicos y una interfaz intuitiva.", 
                "El proyecto fue desarrollado utilizando Next.js para la construcción del front-end, Tailwind CSS para estilizar la interfaz y OpenAI API para proporcionar información en tiempo real. Además, integré MySQL para gestionar la base de datos y asegurar un rendimiento eficiente.", 
                "A lo largo del desarrollo, enfoqué los esfuerzos en la usabilidad y en un diseño responsivo, adaptado para usuarios en dispositivos móviles y de escritorio. Este proyecto destaca por combinar creatividad y tecnología, proporcionando una experiencia educativa inmersiva.", 
            ],
            links: {
                intro: "Project Links ",
                gitHubLink: 'https://github.com/StellarDBryan', 
                deployLink: 'citc.vercel.app', 
            }
        },
    ]
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (<>
    <AnimatePresence>
      {active && typeof active === "object" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0 grid place-items-center z-[100] overflow-auto will-change-scroll">
          <motion.button
            key={`button-${active.title}-${id}`}
            layout
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-700 rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.title}-${id}`}
            ref={ref}
            className="w-full max-w-[80vw] sm:max-w-[70vw] md:max-w-[50vw] h-auto   flex flex-col bg-neutral-900 sm:rounded-3xl">
            <motion.div layoutId={`image-${active.title}-${id}`}>
              <Image
                priority
                width={200}
                height={200}
                src={active.src}
                alt={active.title}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div>
              <div className="flex justify-between items-start p-4">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="font-medium text-neutral-200 text-base">
                    Nombre de proyecto
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-400 text-base">
                    {active.description}
                  </motion.p>
                </div>

                <motion.a
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  href={active.ctaLink}
                  target="_blank"
                  className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                  {active.ctaText}
                </motion.a>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-200 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul
      className="mx-auto p-5 w-[85vw] lg:w-[70vw] flex flex-row flex-wrap items-center justify-center gap-10">
      {cards.map((card, index) => (
        <motion.div
          layoutId={`card-${content.projects[0].name}-${id}`}
          key={content.projects[0].name}
          className=" flex flex-col w-[100%] md:w-[45%] lg:h-auto bg-neutral-900/100 rounded-xl overflow-hidden">
          <div className="flex gap-0 flex-col  w-full">
            <motion.div layoutId={`image-${content.projects[0].name}-${id}`} className="relative w-full h-[12rem] lg:h-[18rem] group cursor-pointer overflow-hidden" onClick={() => setActive(card)}>
              <Image
                fill
                src={content.projects[0].img}
                alt={content.projects[0].name}
                className="h-full w-full object-cover tranform group-hover:scale-110 md:group-hover:scale-125 transition ease-in-out duration-200" />
            </motion.div>
            <div className="flex justify-center items-start flex-col p-5 gap-3">
              <motion.h3
                layoutId={`title-${content.projects[0].name}-${id}`}
                className="font-bold text-gray-50 text-[1.1rem] sm:text-h6 text-wrap md:text-nowrap gap-3 sm:gap-5 rounded-full w-full md:text-left text-base flex flex-row items-center">
                {content.projects[0].name}
                <div className="bg-purple-300/80 h-[0.1rem] w-5 sm:w-full" />
                <a href={content.projects[0].links.gitHubLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                </a>
                <a href={content.projects[0].links.deployLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"/></svg>
                </a>
              </motion.h3>
              <motion.p
                layoutId={`description-${content.projects[0].skills}-${id}`}
                className="text-gray-400 text-sm1 md:text-[0.9rem] md:text-left text-base">
                {content.projects[0].skills.map((skill, id) => (
                    <span key={id}>{`${(id == 0) ? '' : ' - '}${skill}`}</span>
                ))}
              </motion.p>
              <motion.p
                layoutId={`description-${content.projects[0].intro}-${id}`}
                className="text-gray-50  text-[0.9rem] md:text-p md:text-left text-wrap flex-row flex-wrap gap-2">
                {content.projects[0].intro}
                <span className="text-purple-300 flex flex-row items-center cursor-pointer" onClick={() => setActive(card)}>
                    {content.action}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="-5 -5 24 24" className="mx-1"><path fill="currentColor" d="m10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2z"/></svg>
                </span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </ul>
  </>);
}

export const CloseIcon = () => {
  return (
    (<motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>)
  );
};

const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<>
            <p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                her melancholic and cinematic music style. Born Elizabeth Woolridge
                Grant in New York City, she has captivated audiences worldwide with
                her haunting voice and introspective lyrics. <br /> <br />Her songs
                often explore themes of tragic romance, glamour, and melancholia,
                drawing inspiration from both contemporary and vintage pop culture.
                With a career that has seen numerous critically acclaimed albums, Lana
                Del Rey has established herself as a unique and influential figure in
                the music industry, earning a dedicated fan base and numerous
                accolades.
                </p>
                <p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                her melancholic and cinematic music style. Born Elizabeth Woolridge
                Grant in New York City, she has captivated audiences worldwide with
                her haunting voice and introspective lyrics. <br /> <br />Her songs
                often explore themes of tragic romance, glamour, and melancholia,
                drawing inspiration from both contemporary and vintage pop culture.
                With a career that has seen numerous critically acclaimed albums, Lana
                Del Rey has established herself as a unique and influential figure in
                the music industry, earning a dedicated fan base and numerous
                accolades.
            </p>
        </>)
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that resonate deeply with
                    their audience. Formed in Los Angeles, California, they have become a
                    cultural icon in the heavy metal music industry. <br /> <br />Their
                    songs often reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre. With a
                    career spanning over four decades, Metallica has released numerous hit
                    albums and singles that have garnered them a massive fan following
                    both in the United States and abroad.
                  </p>)
      );
    },
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        (<p>Himesh Reshammiya, a renowned Indian music composer, singer, and
                    actor, is celebrated for his distinctive voice and innovative
                    compositions. Born in Mumbai, India, he has become a prominent figure
                    in the Bollywood music industry. <br /> <br />His songs often feature
                    a blend of contemporary and traditional Indian music, capturing the
                    essence of modern Bollywood soundtracks. With a career spanning over
                    two decades, Himesh Reshammiya has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                  </p>)
      );
    },
  },
];
