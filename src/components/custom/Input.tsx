"use client";
import React, { useRef, useState } from "react";
import { FormErrorText } from "../landing/common/FormErrorText";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  errortext?: string;
};

export const Input = ({ className, error = false, ...props }: Props) => {
  const [value, setValue] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange && props.onChange(e);
  };
  const handleContainerClick = () => {
    containerRef.current?.querySelector("input")?.focus();
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full"
    >
      <div
        className={`h-14 px-4 py-1 rounded-md bg-black-on-neutral text-13px flex items-center transition-all duration-200 ease-in-out border-[1.5px] border-transparent ${
          !error
            ? "focus-within:border-primary-border focus-within:ring-primary-ring"
            : "border-danger-500 ring-danger-100 ring-4"
        }  focus-within:ring-4 ${className}`}
      >
        <input
          {...props}
          className={`w-full bg-transparent border-none text-black-900 focus:outline-none text-13px leading-5 peer focus:translate-y-[0.5rem] ${
            value ? "translate-y-[0.5rem]" : ""
          }`}
          placeholder=" "
          onChange={handleChange}
          value={value}
        />
        <label
          className={`absolute top-1/2 text-black-subdued  translate-y-[-50%] left-4 transform transition-all duration-200 ease-in-out pointer-events-none
            ${
              value || props.value
                ? "top-[1.15rem] text-[0.625rem]"
                : "peer-focus:top-[1.15rem] peer:translate-y-0 text-13px"
            } 
            peer-focus:top-[1.15rem] peer-focus:text-[0.625rem] `}
        >
          {props.placeholder}
        </label>
      </div>

      {props.errortext && error && <FormErrorText text={props.errortext} />}
    </div>
  );
};
