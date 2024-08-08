import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className="relative w-full flex flex-col justify-center">
      <input
        {...props}
        placeholder=" "
        className={`h-14 px-4 border-none rounded-md bg-black-on-neutral text-13px leading-5 focus:pt-3 focus:outline-[1.5px] focus:outline-primary-border focus:ring-4 focus:ring-primary-ring w-full text-13px peer ${props.className}`}
      />
      <label className="absolute left-4 top-1/2  transform -translate-y-1/2 text-gray-500 transition-all duration-200 ease-in-out pointer-events-none peer-placeholder-shown:text-13px peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:text-[0.625rem] peer-focus:text-primary-border peer-valid:top-5 peer-valid:text-[0.625rem] peer-valid:text-primary-border">
        {props.placeholder}
      </label>
    </div>
  );
};
