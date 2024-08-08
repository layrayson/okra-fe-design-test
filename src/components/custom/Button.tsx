import React from "react";

interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
const Button = ({
  children,
  className,
  onClick,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={"flex items-center justify-center " + className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
