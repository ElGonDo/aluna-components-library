import React, { useState, useEffect } from "react";
import { Slider } from "../Slider/Slider";
import RedesHumanasImage from "../../../public/Images/LogoRedesHumanas.png";
import imageCarousel1 from "../../../public/Images/Image@3x.png";
import imageCarousel2 from "../../../public/Images/luciana.png";

export const Carousel: React.FC = () => {
  const sliders = [
    {
      image: RedesHumanasImage,
      news: "Noticia Importante",
      title: "Título de la Noticia",
      paragraph:
        "Este es un párrafo descriptivo sobre la noticia. Nueva Luciana",
      date: "01 de enero de 2023",
    },
    {
      image: imageCarousel1,
      news: "¡Noticias!",
      title: "Conectando talentos, cultivando oportunidades.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet elementum enim, convallis vestibulum arcu. Sed neque nunc, commodo et luctus nec.",
      date: "02 de febrero de 2023",
    },
    {
      image: imageCarousel2,
      news: "Última Hora",
      title: "Nuevas actualizaciones disponibles.",
      paragraph:
        "Curabitur venenatis urna vel dolor posuere, non sodales mi varius. Duis ut risus at purus blandit commodo.",
      date: "03 de marzo de 2023",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="grid grid-cols-[repeat(3,_100%)] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliders.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center"
            >
              <Slider {...slide} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-gray-800/30 group hover:bg-blue-400 dark:group-hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
        aria-label="Previous slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10">
          <svg
            className="w-4 h-4 text-white dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 z-40 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-gray-800/30 group hover:bg-blue-400 dark:group-hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
        aria-label="Next slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10">
          <svg
            className="w-4 h-4 text-white dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};
