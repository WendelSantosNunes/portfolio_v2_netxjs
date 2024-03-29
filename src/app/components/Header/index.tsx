"use client";
import { useState } from "react";

// Components
import { MenuMobile } from "../MenuMobile";

//  Image
import { ThemeSwitcher } from "../ThemeButton";

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <header className="bg-color-secudary border-b-2 border-color-border-1 h-20 flex justify-center px-4 sticky top-0 z-10">
      <div
        className={`${
          menuIsVisible
            ? "fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10"
            : ""
        } max-w-tela w-full h-full flex justify-between items-center animate-animation_header`}
      >
        <ThemeSwitcher />

        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        <nav className="text-white max-md:invisible max-md:opacity-0 max-md:hidden">
          <ul className="flex justify-between space-x-5">
            <li>
              <a href="#secao1">
                <strong className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1">
                  Sobre
                </strong>
              </a>
            </li>
            <li>
              <a
                href="#secao2"
                className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1"
              >
                <strong>Habilidades</strong>
              </a>
            </li>
            <li>
              <a
                href="#secao3"
                className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1"
              >
                <strong>Experiência</strong>
              </a>
            </li>
            <li>
              <a
                href="#secao4"
                className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1"
              >
                <strong>Projetos</strong>
              </a>
            </li>
            <li>
              <a
                href="#secao5"
                className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1"
              >
                <strong>Certificados</strong>
              </a>
            </li>
            <li>
              <a
                href="#secao6"
                className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1"
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
