"use client";
import { useState } from "react";

// Components
// import { MenuMobile } from "../MenuMobile";

//  Image
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";

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
        <Link href="/">
          <Image src={logo} alt="Logo do Site" className="h-16 w-14" />
        </Link>

        {/* <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        /> */}

        <nav className="text-white max-md:invisible max-md:opacity-0 max-md:hidden">
          <ul className="flex justify-between space-x-5">
            <li>
              <a
                href="https://www.linkedin.com/in/wendel-nunes1/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mr-3 max-md:mr-5"
              >
                <strong className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1">
                  <LinkedinLogo size={32} weight="fill" color="#0A66C2" />
                </strong>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/WendelSantosNunes"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mr-3 max-md:mr-5"
              >
                <strong className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1">
                  <GithubLogo size={32} weight="fill" />
                </strong>
              </a>
            </li>

            <li>
              <a
                href="mailto:wendelnunes9999@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mr-3"
              >
                <strong className="relative transition-all w-min-content before:w-0 before:h-0.5 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-700 hover:before:w-full hover:before:left-0 hover:before:bg-color-border-1 hover:text-color-border-1">
                  <Envelope size={32} weight="fill" />
                </strong>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
