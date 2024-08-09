"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "../shared/Icon";
import { FormErrorText } from "../landing/common/FormErrorText";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => void;
  placeholder?: string;
  containerClassName?: string;
  value?: string;
  error?: boolean;
  errortext?: string;
  options: string[];
};

const Select = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState<"top" | "bottom">("bottom");
  const menuRef = useRef<HTMLUListElement>(null);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (
    event: React.MouseEvent,
    itemValue: string | number
  ) => {
    event.stopPropagation();
    if (props.onChange) {
      const syntheticEvent = {
        target: {
          name,
          value: itemValue,
        },
      } as unknown as React.ChangeEvent<{ name?: string; value: unknown }>;
      props.onChange(syntheticEvent);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    const { options, onChange } = props;
    switch (e.key) {
      case "ArrowDown":
        setFocusedIndex((prevIndex) =>
          prevIndex < options.length - 1 ? prevIndex + 1 : 0
        );
        break;
      case "ArrowUp":
        setFocusedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : options.length - 1
        );
        break;
      case "Enter":
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          const syntheticEvent = {
            target: {
              name,
              value: options[focusedIndex],
            },
          } as unknown as React.ChangeEvent<{ name?: string; value: unknown }>;
          onChange && onChange(syntheticEvent);
        }
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && containerRef.current && menuRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const menuHeight = menuRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - rect.bottom;
      if (spaceBelow < menuHeight) {
        setMenuPosition("top");
      } else {
        setMenuPosition("bottom");
      }
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={
          "flex flex-col max-w-full relative " + props.containerClassName
        }
      >
        <div
          onClick={handleSelectClick}
          className={`h-14 px-4 py-1  rounded-md bg-black-on-neutral text-13px flex-grow flex  items-center transition-all duration-200 ease-in-out border-[1.5px] ${
            isOpen && !props.error
              ? "border-primary-border ring-4 ring-primary-ring "
              : "border-transparent"
          } ${props.error ? "border-danger-500 ring-danger-100 ring-4" : ""} ${
            props.className
          }`}
        >
          <div className="flex justify-items-stretch items-center flex-grow">
            <p
              className={`text-13px text-black-subdued leading-5 absolute top-1/2  translate-y-[-50%] transform transition-all duration-200 ease-in-out pointer-events-none  ${
                props.value ? "top-[1.15rem] text-[0.625rem]" : ""
              }`}
            >
              {props.placeholder}
            </p>
            <p
              className={`text-13px text-black-900 leading-5 absolute translate-y-[0.5rem] transform transition-all duration-200 ease-in-out pointer-events-none`}
            >
              {props.value}
            </p>
            <ChevronDown
              className={`h-4 w-4 right-4 absolute ${
                props.value ? "translate-y-[0.5rem]" : ""
              }`}
            />
          </div>
        </div>

        {isOpen && !props.disabled && (
          <ul
            ref={menuRef}
            className={`max-h-[326px] p-1 bg-white border border-border-light shadow-[0px_4px_4px_0px_#3F47590A,0px_8px_8px_0px_#00000014] w-full absolute z-[1000] overflow-y-auto overflow-x-hidden rounded-lg ${
              menuPosition === "bottom" ? "top-[50px]" : ""
            } ${menuPosition === "top" ? "bottom-[50px]" : ""} mt-[16px]`}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="listbox"
          >
            {props.options.map((el, index) => (
              <li
                key={"select-option-" + index}
                className={`min-h-8 py-1 px-2 flex items-center cursor-pointer ${
                  el === props.value ? "bg-black-on-neutral" : "bg-white"
                } hover:bg-black-on-neutral rounded-md ${
                  focusedIndex === index ? "bg-black-on-neutral" : ""
                }`}
                onClick={(event) => handleOptionClick(event, el)}
                onMouseEnter={() => setFocusedIndex(index)}
                role="option"
                aria-selected={el === props.value}
              >
                <p className="font-medium text-black-900 text-sm leading-22px">
                  {el}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      {props.errortext && props.error && (
        <FormErrorText text={props.errortext} />
      )}
    </div>
  );
};

export default Select;
