import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"textarea"> {
  name: string;
}

export function Textarea({ placeholder, name, id, ...props }: InputProps) {
  const textId = id ?? name;

  return (
    <div className="relative">
      <textarea
        name={name}
        {...props}
        id={textId}
        placeholder=" "
        className={`border-black dark:border-white ${props.className}`}
      />
      <label
        className="absolute text-xs left-[13px] top-2 pointer-events-none dark:text-white peer-placeholder-shown:text-base peer-placeholder-shown:top-[22px] transition-all"
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
}
