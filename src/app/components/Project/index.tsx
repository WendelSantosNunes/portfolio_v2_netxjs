"use client";

// Image
import Image from "next/image";

// Data
import { project } from "../../data/project";

export function Project() {
  return (
    <section
      className="mt-28 text-white px-4 max-w-tela w-full h-full m-auto"
      id="secao4"
    >
      <h2 className="text-4xl max-sm:text-3xl font-bold mb-16">
        Projetos <span className="text-color-tertiary">.</span>
      </h2>
      <div className="grid gap-4 grid-cols-3 max-[1100px]:grid-cols-2 max-md:grid-cols-1">
        {project &&
          project.map((item, index) => {
            return (
              <div
                className="bg-color-primary w-full max-w-[352px] m-auto px-6 py-4 rounded-lg "
                key={index}
              >
                <h3 className="text-lg pb-7">{item.titulo}</h3>
                <Image
                  src={item.img}
                  alt="Laborátorio de Pesquisas Avançadas em Análises de Dados"
                  className="max-w-[272px] h-48 m-auto"
                />
                <p className="pb-7 text-[#9CA3AF] text-justify mt-3">
                  {item.text}
                </p>
                <a
                  href={item.projeto}
                  className="text-color-tertiary hover:text-white"
                  target="_blank"
                >
                  Visualizar o Projeto
                </a>
              </div>
            );
          })}
      </div>
    </section>
  );
}
