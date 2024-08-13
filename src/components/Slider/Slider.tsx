import React from "react";

interface SliderProps {
  image: string;
  news: string;
  title: string;
  paragraph: string;
  date: string;
}

export const Slider: React.FC<SliderProps> = ({
  image,
  news,
  title,
  paragraph,
  date,
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-6 lg:py-16 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:flex lg:items-center lg:justify-center sm:mb-4 md:mb-4 lg:mb-0">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="inline text-green-600 bg-green-100 px-2 py-1 rounded-full max-w-fit my-2">
            {news}
          </span>
          <h1 className="text-4xl font-bold tracking-tight leading-tight md:text-3xl xl:text-4xl dark:text-white my-2">
            {title}
          </h1>
          <p className="text-gray-700 dark:text-gray-400 mb-6 text-lg lg:text-xl my-2">
            {paragraph}
          </p>
          <span className="text-gray-500 dark:text-gray-300 text-right my-2">
            {date}
          </span>
        </div>
      </div>
    </section>
  );
};
