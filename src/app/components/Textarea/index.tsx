import { ComponentProps } from "react";
// Estou estendendo todas as propriedades do input
// Name é utilizado no foco do input
interface InputProps extends ComponentProps<"textarea"> {
  name: string;
}

export function Textarea({ placeholder, name, id, ...props }: InputProps) {
  const textId = id ?? name;
  // Quando retiramos algo utilizando destruturação é necessário colocar alguns items.
  return (
    <div className="relative">
      <textarea name={name} {...props} id={textId} placeholder=" " />
      {/* htmlFor e id-> São necessário para dar o focus no input*/}
      <label
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-white peer-placeholder-shown:text-base peer-placeholder-shown:top-[22px] transition-all"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
}
