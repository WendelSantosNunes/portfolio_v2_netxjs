import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = id ?? name;
  return (
    <div className="relative">
      <input
        name={name}
        {...props}
        id={inputId}
        className="bg-transparent border-2 focus:border-color-border-1 w-full border-black dark:border-white rounded-lg px-3 h-[52px] dark:text-white placeholder-shown:pt-0 pt-4 peer  transition-all outline-none"
        placeholder=" "
        autoComplete="off"
      />
      <label
        className="absolute text-xs left-[13px] top-1.5 pointer-events-none dark:text-white peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
}
