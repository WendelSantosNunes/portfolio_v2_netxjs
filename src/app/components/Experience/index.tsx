"use client";
// Component
import { cardExperience } from "../../data/experience";
import { useEffect, useState } from "react";

export function Experience() {
  const [tabIndex, setTabIndex] = useState(0);

  function handleExperience(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    const newValue = parseInt(event.currentTarget.value);

    setTabIndex(newValue);
  }

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`mt-28 text-white px-4 max-w-tela w-full h-full m-auto  opacity-0 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-100"
      }`}
      id="secao3"
    >
      <h2 className="text-4xl max-sm:text-3xl font-bold mb-16">
        Experiência <span className="text-color-tertiary">.</span>
      </h2>

      <div className="flex justify-between space-x-4 max-md:space-x-0 max-md:flex-col max-md:justify-center max-md:items-center">
        <div className="w-full max-w-[242px] max-md:mb-4 px-2">
          {cardExperience &&
            cardExperience.map((item, index) => {
              if (tabIndex !== index) {
                return (
                  <button
                    className="bg-color-primary h-12 flex justify-center items-center cursor-pointer border-l-2 border-color-primary w-full max-w-[242px]"
                    onClick={handleExperience}
                    value={index}
                    key={index}
                  >
                    <div>
                      <p>{item.empresa}</p>
                    </div>
                  </button>
                );
              } else {
                return (
                  <button
                    className="bg-color-primary h-12 flex justify-center items-center cursor-pointer border-l-2 border-color-tertiary w-full max-w-[242px]"
                    onClick={handleExperience}
                    value={index}
                    key={index}
                  >
                    <p>{item.empresa}</p>
                  </button>
                );
              }
            })}
        </div>

        <div className="w-full max-w-[833px] bg-color-primary px-2 rounded-lg">
          <div className="flex justify-between items-baseline w-full pt-2 max-sm:flex-col">
            <h2 className="text-2xl">{cardExperience[tabIndex].titulo}</h2>
            <p className="max-sm:text-sm">{cardExperience[tabIndex].ano}</p>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: cardExperience[tabIndex].texto,
            }}
            className="mt-6 mb-6 text-justify"
          />
        </div>
      </div>
    </section>
  );
}
