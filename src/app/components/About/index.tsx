"use client";
import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

//  Image
import Image from "next/image";
import imgPerfil from "../../assets/perfil.png";

export function About() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className={`mt-36 animate-animation_presentation dark:text-white px-4 max-w-tela w-full h-full m-auto sm:opacity-0 transition-opacity duration-500 ease-in-out ${
        isVisible ? "sm:opacity-100" : "sm:opacity-0"
      }`}
      id="secao1"
    >
      <h2 className="text-center text-4xl max-sm:text-3xl font-bold">
        Sobre <span className="text-color-border-1">.</span>
      </h2>
      <div className="flex mt-20 justify-between max-md:flex-wrap-reverse max-md:justify-center">
        <div className="w-about-text text-justify max-md:mt-4 ">
          <p className="mb-5">
            Olá, meu nome é <strong>Wendel</strong>, sou formado em Sistemas de
            Informação pela <strong>Universidade Federal do Piauí</strong>.
          </p>

          <p className="mb-5">
            Ao longo da minha jornada acadêmica, tenho desenvolvido um forte
            interesse no desenvolvimento de aplicações, abrangendo desde o{" "}
            <strong>Back-end até o Front-End</strong>. Dedico-me constantemente
            ao aprimoramento nesse campo, por meio de{" "}
            <strong>cursos, projetos pessoais e monitoria na área</strong>.
            Possuo afinidade com tecnologias como{" "}
            <strong>
              Java Spring, Java Security, React, Nest.js, Next.js e Node.js
            </strong>{" "}
            para o desenvolvimento de Aplicação.
          </p>

          <p className="mb-5">
            Sou movido pela{" "}
            <strong>dedicação, disciplina e persistência</strong>,
            características que acredito serem fundamentais para agregar valor
            em qualquer ambiente de trabalho. Além disso, sou uma pessoa pontual
            e sempre comprometida em superar desafios e entregar resultados de
            qualidade.
          </p>

          <p className="mb-9">
            Estou sempre aberto a novas <strong>oportunidades</strong> e
            parcerias, e ficarei grato em conectar-me com profissionais e
            empresas que compartilham dos mesmos interesses e valores. Vamos
            juntos em busca do crescimento e sucesso mútuo!
          </p>

          <div className="curriculum text-center">
            <a
              href="https://drive.google.com/file/d/1cogSonsac4IwC5Qh865F4suUIQUyRwzb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="dark:text-white hover:text-white hover:bg-color-border-1 border-2 border-color-border-1 p-2 px-4 mb-10 text-lg rounded-lg font-bold"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-about-text flex flex-col items-center ml-3">
          <div className="relative w-min-content before:h-1 before:absolute before:bottom-[-28px] before:right-0 before:origin-left before:w-full before:left-0 before:bg-color-border-1 before:rounded-2xl mb-6">
            <Image
              src={imgPerfil}
              alt="Minha foto"
              className="w-full max-w-80"
            />
          </div>

          <div className="w-80 max-md:flex max-md:justify-center">
            <a
              href="https://www.linkedin.com/in/wendel-nunes1/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-5"
            >
              <LinkedinLogo
                size={32}
                weight="fill"
                className="mr-3 max-md:mr-5"
                color="#0A66C2"
              />
              <p className="max-md:hidden">Wendel Santos</p>
            </a>

            <a
              href="https://github.com/WendelSantosNunes"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-5"
            >
              <GithubLogo
                size={32}
                weight="fill"
                className="mr-3 max-md:mr-5"
              />
              <p className="max-md:hidden">WendelSantosNunes</p>
            </a>

            <a
              href="mailto:wendelnunes9999@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-5"
            >
              <Envelope size={32} weight="fill" className="mr-3" />
              <p className="max-md:hidden">wendelnunes9999@gmail.com</p>
            </a>

            <a
              href="https://wa.me/5589994470129"
              target="_blank"
              rel="noreferrer"
              className="flex items-center mt-5"
            >
              <WhatsappLogo
                size={32}
                weight="fill"
                className="mr-3"
                color="#56EB6C"
              />
              <p className="max-md:hidden">Wendel</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
