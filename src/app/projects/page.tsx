import { Header } from "./components/Header";

import { project } from "../data/project";
import Image from "next/image";
import { Footer } from "../components/Footer";

export default function Projects() {
  return (
    <>
      <Header />

      <section
        className={`mt-24 dark:text-white px-4 max-w-tela w-full h-full m-auto pacity-0 transition-opacity duration-500 ease-in-out`}
        id="secao4"
      >
        <h2 className="text-center text-4xl max-sm:text-3xl font-bold mb-16">
          Projetos <span className="text-color-border-1">.</span>
        </h2>

        <div>
          {project &&
            project.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div
                    className="w-full px-6 py-4 flex items-end gap-6 mt-16 max-md:flex-col"
                    key={index}
                  >
                    <Image
                      src={item.img}
                      alt={item.description}
                      className="w-full max-w-[594px] max-lg:max-w-[500px] max-[900px]:max-w-[400px] max-md:max-w-[594px] m-auto rounded-lg md:h-[400px]"
                    />
                    <div className="mb-2">
                      <h3 className="text-lg font-bold">{item.titulo}</h3>

                      <p className="pb-7 dark:text-white mt-3">{item.text}</p>

                      <a
                        href={item.projeto}
                        className="dark:text-white hover:text-white hover:bg-color-border-1 border-2 border-color-border-1 p-2 px-4 mb-10 rounded-lg font-bold"
                        target="_blank"
                      >
                        Visualizar o Projeto
                      </a>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="w-full px-6 py-4 flex items-end gap-6 mt-16 max-md:flex-col-reverse"
                    key={index}
                  >
                    <div className="mb-2 text-right max-md:text-left">
                      <h3 className="text-lg font-bold">{item.titulo}</h3>

                      <p className="pb-7 dark:text-white mt-3">{item.text}</p>

                      <a
                        href={item.projeto}
                        className="dark:text-white hover:text-white hover:bg-color-border-1 border-2 border-color-border-1 p-2 px-4 mb-10 rounded-lg font-bold"
                        target="_blank"
                      >
                        Visualizar o Projeto
                      </a>
                    </div>

                    <Image
                      src={item.img}
                      alt={item.description}
                      className="w-full max-w-[594px] max-lg:max-w-[500px] max-[900px]:max-w-[400px] max-md:max-w-[594px] m-auto rounded-lg h-96"
                    />
                  </div>
                );
              }
            })}
        </div>
      </section>

      <Footer />
    </>
  );
}
