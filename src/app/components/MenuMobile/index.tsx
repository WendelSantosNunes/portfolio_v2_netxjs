import { XCircle, List } from "@phosphor-icons/react";

interface view {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMobile({ menuIsVisible, setMenuIsVisible }: view) {
  return (
    <div className="sm:invisible sm:opacity-0 sm:hidden">
      {menuIsVisible ? (
        <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center bg-gradient-to-br from-[#23252B] to-[rgba(17,18,17,0.95)]">
          <XCircle
            size={32}
            weight="fill"
            color="#fff"
            onClick={() => setMenuIsVisible(false)}
            className="absolute top-4 right-4 origin-center rotate-180 transition-all duration-500 cursor-pointer"
          />

          <nav className="text-white w-full">
            <ul className="flex items-center justify-center flex-col scale-75 text-3xl gap-5">
              <li>
                <a href="#secao1" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary">
                    Sobre
                  </strong>
                </a>
              </li>
              <li>
                <a href="#secao2" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary">
                    Conhecimentos
                  </strong>
                </a>
              </li>
              <li>
                <a href="#secao3" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary">
                    Experiências
                  </strong>
                </a>
              </li>
              <li>
                <a href="#secao4" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary">
                    Projetos
                  </strong>
                </a>
              </li>
              <li>
                <a href="#secao5" onClick={() => setMenuIsVisible(false)}>
                  <strong className="relative transition-all w-min-content before:w-0 before:h-1 before:absolute before:bottom-[-6px] before:right-0 before:origin-left before:left-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-color-tertiary">
                    Contato
                  </strong>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <List
          size={32}
          weight="fill"
          color="#fff"
          onClick={() => setMenuIsVisible(true)}
        />
      )}
    </div>
  );
}
