import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"button"> {}

export function Button(props: InputProps) {
  return (
    <>
      <button
        {...props}
        className="border-2 border-color-border-1 hover:bg-color-border-1 hover:text-white disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium dark:text-white disabled:text-gray-400 disabled:cursor-not-allowed transition-all w-44 m-auto text-xl"
      ></button>
    </>
  );
}
