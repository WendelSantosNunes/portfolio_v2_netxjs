"use client";
import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";

//  Image
import Image from "next/image";
import imgPerfil from "../../assets/perfil.png";

export function About() {
  return (
    <div
      className="mt-28 text-white px-4 max-w-tela w-full h-full m-auto"
      id="secao1"
    >
      <h2 className="text-center text-4xl max-sm:text-3xl font-bold">
        Sobre <span className="text-color-tertiary">.</span>
      </h2>
      <div className="flex mt-20 justify-between max-md:flex-wrap-reverse max-md:justify-center">
        <div className="w-about-text text-justify max-md:mt-4">
          <p className="mb-5">
            Olá, meu nome é <strong>Wendel</strong>, sou um entusiasta da área
            de Sistemas de Informação e atualmente estou cursando o{" "}
            <strong>
              8º período desse curso na Universidade Federal do Piauí
            </strong>
            .
          </p>

          <p className="mb-5">
            Ao longo da minha jornada acadêmica, venho desenvolvendo um forte
            interesse na área da <strong>web</strong> e me dedico constantemente
            ao aprimoramento nesse campo, através de{" "}
            <strong>cursos, projetos pessoais e monitoria na área</strong>.
            Tenho grande afinidade com tecnologias como{" "}
            <strong>
              React, Typescript, Next e outras ferramentas para desenvolvimento
              web
            </strong>
            . Além disso, possuo conhecimento básico em{" "}
            <strong>NodeJs e Django</strong> para desenvolvimento de back-end.
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
              href="https://drive.google.com/file/d/1xAwYAQzy4oOWxfj1WpeQha8yEO5Ia1-r/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white py-2 px-5 rounded-lg hover:bg-white hover:text-black"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-about-text flex flex-col items-center ml-3">
          <div className="relative w-min-content before:h-1 before:absolute before:bottom-[-28px] before:right-0 before:origin-left before:w-full before:left-0 before:bg-color-tertiary before:rounded-2xl mb-6">
            <Image src={imgPerfil} alt="Minha foto" className="w-80" />
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
          </div>
        </div>
      </div>
    </div>
  );
}
