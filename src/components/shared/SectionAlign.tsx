import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SectionAlign = ({ children }: Props) => {
  return <div className="max-w-650px mx-auto mx-2">{children}</div>;
};
