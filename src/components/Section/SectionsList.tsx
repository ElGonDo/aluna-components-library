import { forwardRef, useImperativeHandle, useRef } from "react";
import image1 from "../../../public/Images/RedesHumanasSection.png";
import image2 from "../../../public/Images/SynergoSection.png";

interface SectionRef {
  scrollToSection: (sectionIndex: number) => void;
}

export const SectionsList = forwardRef<SectionRef>((_, ref) => {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useImperativeHandle(ref, () => ({
    scrollToSection: (sectionIndex: number) => {
      sectionRefs[sectionIndex]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    },
  }));

  const sections = [
    {
      image: image1,
      title: "Redes Humanas",
      paragraph: "Descripción de Redes Humanas.",
      buttonLabel: "¡Aprende Mas!",
      href: "https://redeshumanas.com/",
    },
    {
      image: image2,
      title: "Synergo",
      paragraph: "Descripción de Sinergo.",
      buttonLabel: "¡Aprende Mas!",
      href: "https://synergo.com.co/",
    },
  ];
  return (
    <>
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className="bg-white dark:bg-gray-900"
            ref={sectionRefs[index]} // Asignar la referencia a cada sección
          >
            <div
              className={`max-w-screen-xl px-4 py-8 mx-auto flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } lg:gap-8`}
            >
              <div className="lg:w-5/12 lg:flex lg:items-center lg:justify-center sm:mb-4 md:mb-4 lg:mb-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-7/12 flex flex-col justify-center">
                <h1 className="text-4xl font-bold tracking-tight leading-tight md:text-3xl xl:text-4xl dark:text-white my-2">
                  {section.title}
                </h1>
                <p className="text-gray-700 dark:text-gray-400 mb-6 text-lg lg:text-xl my-2">
                  {section.paragraph}
                </p>
                <a
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline max-w-fit"
                  href={section.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {section.buttonLabel}
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
});
