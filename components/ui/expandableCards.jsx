"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";


export function ExpandableCardDemo({ content }) {
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
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 h-full w-full z-10" />
      )}
    </AnimatePresence>
    <AnimatePresence>
      {active && typeof active === "object" ? (
        <div className="fixed inset-0 grid place-items-center z-[100] overflow-auto will-change-scroll">
          <motion.button
            key={`button-${active.name}-${id}`}
            layout
            initial={{
              opacity: 0,
              y: 2000
            }}
            animate={{
              opacity: 1,
              translateY: -2000,
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.05,
              },
            }}
            transition= {{ 
              duration: 0.2, 
              delay: 0.1, 
              type: "spring",
            }}
            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-700 rounded-full h-6 w-6"
            onClick={() => setActive(null)}>
            <CloseIcon />
          </motion.button>
          <motion.div
            layoutId={`card-${active.name}-${id}`}
            ref={ref}
            className="w-full max-w-[80vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[50vw] h-auto flex flex-col bg-neutral-900 sm:rounded-3xl">
            <motion.div layoutId={`image-${active.name}-${id}`} className="relative w-full h-[50vh] sm:h-[60vh]">
              <Image
                priority
                fill
                src={active.img}
                alt={active.name}
                className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
            </motion.div>

            <div className="pb-10">
              <div className="flex items-start p-4 pb-0">
                <div className="">
                  <motion.h3
                    layoutId={`title-${active.name}-${id}`}
                    className="font-bold text-h6 md:text-h5 text-gray-50 text-base">
                    {active.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-gray-400 text-sm1 md:text-[0.9rem] text-base">
                    {active.skills.map((skill, id) => (
                      <span key={id}>{`${(id == 0) ? '' : ' - '}${skill}`}</span>
                    ))}
                  </motion.p>
                </div>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-200 text-[0.9rem] md:text-p h-auto md:h-fit pb-5 flex flex-col items-start gap-4 overflow-auto [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                  {active.description.map((p, id) => (
                    <p key={id}>{p}</p>
                  ))}
                </motion.div>
              </div>
              <div className="px-4 flex flex-col items-start justify-center">
                  <h6 className="text-[1.1rem] md:text-h6 text-gray-50 font-bold">{active.links.intro}</h6>
                  <div className="flex flex-row text-gray-400 gap-2 text-[0.9rem] md:text-p">
                    {active.links.deployLink ? (
                      <a href={active.links.deployLink} className="link link-hover flex flex-row items-center gap-1" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"/></svg>
                        {content.liveProject}
                      </a>
                    ) : ''}
                    {active.links.gitHubLink ? (
                      <a href={active.links.gitHubLink} className="link link-hover flex flex-row items-center gap-1" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                        {content.gitHubRepo}
                      </a>
                    ) : ''}
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
    <ul
      className="mx-auto p-5 w-[85vw] lg:w-[70vw] flex flex-row flex-wrap items-center justify-center gap-10">
      {content.projects.map((project, index) => (
        <motion.div
          layoutId={`card-${project.name}-${id}`}
          key={project.name}
          className=" flex flex-col w-[100%] md:w-[45%] lg:h-auto bg-neutral-900/100 rounded-xl overflow-hidden">
          <div className="flex gap-0 flex-col  w-full">
            <motion.div layoutId={`image-${project.name}-${id}`} className="relative w-full h-[12rem] lg:h-[18rem] group cursor-pointer overflow-hidden" onClick={() => setActive(project)}>
              <Image
                fill
                src={project.img}
                alt={project.name}
                className="h-full w-full object-cover tranform group-hover:scale-110 md:group-hover:scale-125 transition ease-in-out duration-200" />
            </motion.div>
            <div className="flex justify-center items-start flex-col p-5 gap-3">
              <motion.h3
                layoutId={`title-${project.name}-${id}`}
                className="font-bold text-gray-50 text-[1.1rem] sm:text-h6 text-wrap md:text-nowrap gap-3 sm:gap-5 rounded-full w-full md:text-left text-base flex flex-row items-center">
                {project.name}
                <div className="bg-purple-300/80 h-[0.1rem] w-full max-w-5 sm:max-w-32 md:max-w-none" />
                {project.links.gitHubLink ? (
                  <a href={project.links.gitHubLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                  </a>
                ) : ''}
                {project.links.deployLink ? (
                  <a href={project.links.deployLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"/></svg>
                  </a>
                ) : ''}
              </motion.h3>
              <motion.p
                layoutId={`description-${project.skills}-${id}`}
                className="text-gray-400 text-sm1 md:text-[0.9rem] md:text-left text-base">
                {project.skills.map((skill, id) => (
                    <span key={id}>{`${(id == 0) ? '' : ' - '}${skill}`}</span>
                ))}
              </motion.p>
              <motion.p
                layoutId={`description-${project.intro}-${id}`}
                className="text-gray-50  text-[0.9rem] md:text-p md:text-left text-wrap flex-row flex-wrap gap-2">
                {project.intro}
                <span className="text-purple-300 flex flex-row items-center cursor-pointer" onClick={() => setActive(project)}>
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
