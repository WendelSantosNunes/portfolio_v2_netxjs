"use client";

import {
  GithubLogo,
  LinkedinLogo,
  Envelope,
  WhatsappLogo,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-color-secudary h-24 mt-36 border-t-2 border-t-color-border-1">
      <div className="text-white px-4 max-w-tela w-full min-[441px]:h-full m-auto flex items-center justify-between max-[440px]:flex-col">
        <p className="font-bold text-base max-[440px]:mt-2 max-[440px]:text-center">
          @ 2024 Wendel Santos
        </p>
        <div className="flex max-[440px]:mt-3">
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

          <a
            href="https://wa.me/5589994470129"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <WhatsappLogo
              size={32}
              weight="fill"
              className="mr-3 max-md:mr-5"
              color="#56EB6C"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
