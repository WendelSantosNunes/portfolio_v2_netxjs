"use client";
import { useEffect, useState } from "react";

//  Image
import Image from "next/image";
import { cardKnowledge } from "../../data/knowledge";

export function Knowledge() {
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 900) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className={`mt-28 text-white px-4 max-w-tela w-full h-full m-auto opacity-0 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
      }`}
      id="secao2"
    >
      <h2 className="text-4xl max-sm:text-3xl font-bold mb-16">
        Conhecimentos <span className="text-color-tertiary">.</span>
      </h2>
      {/* <div className="flex justify-between flex-wrap gap-y-8"> */}
      <div className="grid grid-cols-6 grid-rows-2 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[365px]:grid-cols-1">
        {cardKnowledge.map((item) => {
          return (
            <div
              className="bg-color-primary border border-red-500 w-40 h-40 flex flex-col justify-center items-center rounded-lg m-auto"
              key={item.id}
            >
              <h3 className="text-xl">{item.title}</h3>
              <Image src={item.img} alt={item.description} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
