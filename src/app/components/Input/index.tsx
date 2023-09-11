import { ComponentProps } from "react";
// Estou estendendo todas as propriedades do input
// Name é utilizado no foco do input
interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = id ?? name;
  // Quando retiramos algo utilizando destruturação é necessário colocar alguns items.
  return (
    <div className="relative">
      <input
        name={name}
        {...props}
        id={inputId}
        className="bg-transparent border-2 focus:border-color-border-1 w-full rounded-lg px-3 h-[52px] text-white placeholder-shown:pt-0 pt-4 peer  transition-all outline-none"
        placeholder=" "
        autoComplete="off"
      />
      {/* htmlFor e id-> São necessário para dar o focus no input*/}
      <label
        className="absolute text-xs left-[13px] top-1.5 pointer-events-none text-white peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
}
