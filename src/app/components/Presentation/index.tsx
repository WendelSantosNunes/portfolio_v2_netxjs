"use client";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

//  Image
import Image from "next/image";
import ImgProgrammng from "../../assets/undraw_programming_re_kg9v 1.svg";

export function Presentation() {
  return (
    <div className="flex justify-between items-center mt-24 px-4 max-md:justify-center max-md:flex-col-reverse max-w-tela w-full h-full m-auto">
      <div className="text-white max-md:mt-5">
        <h2 className="text-3xl mb-5 max-sm:text-2xl">Olá, eu sou o</h2>
        <h1 className="text-color-tertiary text-5xl max-sm:text-4xl">
          Wendel Santos
        </h1>
        <h2 className="text-3xl mt-5 max-sm:text-2xl">Front-End Developer</h2>

        <div className="flex justify-between mt-14 w-72">
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
            className="flex items-center border-2 py-2 px-5 rounded-lg border-white hover:bg-white hover:text-black"
          >
            <GithubLogo size={32} weight="fill" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
      <Image
        src={ImgProgrammng}
        alt="Desenho de um programador trabalhando"
        className="h-72 animate-presetation-home"
      />
    </div>
  );
}
