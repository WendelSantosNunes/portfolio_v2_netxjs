"use client";

import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-color-secudary h-24 mt-36 border-t-2 border-t-color-tertiary">
      <div className="text-white px-4 max-w-tela w-full h-full m-auto flex items-center justify-between ">
        <p className="font-bold text-base">@ 2023 Wendel Santos</p>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/wendel-nunes1/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <LinkedinLogo
              size={32}
              weight="fill"
              className="mr-3 max-md:mr-5"
              color="#0A66C2"
            />
          </a>

          <a
            href="https://github.com/WendelSantosNunes"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <GithubLogo size={32} weight="fill" className="mr-3 max-md:mr-5" />
          </a>

          <a
            href="mailto:wendelnunes9999@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center "
          >
            <Envelope size={32} weight="fill" className="mr-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
