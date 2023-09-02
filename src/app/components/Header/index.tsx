"use client";
import { useState } from "react";

// Components
import { MenuMobile } from "../MenuMobile";

//  Image
import Image from "next/image";
import logo from "../../assets/logo.svg";

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <header className="bg-color-primary h-20 flex justify-center px-4 sticky top-0 z-10">
      <div className="max-w-tela w-full h-full flex justify-between items-center ">
        <Image src={logo} alt="Logo do Site" className="h-16 w-14" />

        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <nav className="text-white w-96 max-sm:invisible max-sm:opacity-0 max-sm:hidden">
          <ul className="flex justify-between">
            <li>
              <a href="#secao1">
                <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary">
                  Sobre
                </strong>
              </a>
            </li>
            <li>
              <a
                href="#secao2"
                className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary"
              >
                <strong>Habilidades</strong>
              </a>
            </li>
            <li>
              <a
                href="#secao3"
                className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary"
              >
                <strong>Cursos</strong>
              </a>
            </li>
            <li>
              <a
                href="#secao4"
                className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary"
              >
                <strong>Projetos</strong>
              </a>
            </li>
            <li>
              <a
                href="#secao5"
                className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary"
              >
                <strong>Contato</strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
