"use client";

//  Image
import Image from "next/image";
import { cardKnowledge } from "../../data/knowledge";

export function Knowledge() {
  return (
    <section
      className={`mt-36 dark:text-white px-4 max-w-tela w-full h-full m-auto transition-opacity duration-500 ease-in-out"
      }`}
      id="secao2"
    >
      <h2 className="text-4xl max-sm:text-3xl font-bold mb-16">
        Conhecimentos <span className="text-color-border-1">.</span>
      </h2>
      <div className="grid grid-cols-6 grid-rows-2 gap-4 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[365px]:grid-cols-1">
        {cardKnowledge.map(({ id, title, description, img }) => {
          return (
            <div
              className="border-2 hover:border-color-border-1 border-black dark:border-white w-40 h-40 flex flex-col justify-center items-center rounded-lg m-auto"
              key={id}
            >
              <h3 className="text-xl">{title}</h3>
              <Image src={img} alt={description} width={100} height={100} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
