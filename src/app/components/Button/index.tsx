import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"button"> {}

export function Button(props: InputProps) {
  return (
    <>
      <button
        {...props}
        className="border-2 hover:border-color-tertiary hover:bg-color-tertiary disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium text-white disabled:text-gray-400 disabled:cursor-not-allowed transition-all w-44 m-auto text-lg"
      ></button>
    </>
  );
}
