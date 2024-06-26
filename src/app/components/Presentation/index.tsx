"use client";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

//  Image
import Image from "next/image";
import ImgProgrammng from "../../assets/undraw_programming_re_kg9v 1.svg";

export function Presentation() {
  return (
    <section className="flex justify-between items-center mt-36 px-4 max-md:justify-center max-md:flex-col-reverse max-w-tela w-full h-full m-auto animate-animation_presentation">
      <div className="dark:text-white max-md:mt-5 max-w-sm w-full max-md:text-center">
        <h2 className="text-3xl mb-5 max-sm:text-2xl">Olá, eu sou o</h2>
        <h1 className="text-color-border-1 text-5xl max-sm:text-4xl">
          Wendel Santos
        </h1>
        <h2 className="text-3xl mt-5 max-sm:text-2xl">Java Developer</h2>

        <div className="flex justify-between mt-14 w-72 max-md:mx-auto">
          <a
            href="https://www.linkedin.com/in/wendel-nunes1/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center border-2 py-2 px-5 rounded-lg border-color-border-1 hover:bg-color-border-1"
          >
            <LinkedinLogo size={32} weight="fill" />
            <p>Linkedin</p>
          </a>
          <a
            href="https://github.com/WendelSantosNunes"
            target="_blank"
            rel="noreferrer"
            className="flex items-center border-2 py-2 px-5 rounded-lg border-black dark:border-white hover:bg-white hover:text-black"
          >
            <GithubLogo size={32} weight="fill" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
      <Image
        src={ImgProgrammng}
        loading="lazy"
        alt="Desenho de um programador trabalhando"
        className="h-72 animate-presetation-home"
      />
    </section>
  );
}
