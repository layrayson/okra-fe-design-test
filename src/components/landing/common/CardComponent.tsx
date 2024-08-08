import { ArrowUpRight } from "@/components/shared/Icon";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  path: string;
  icon: JSX.Element;
  className?: string;
};
export const CardComponent = ({
  name,
  description,
  path,
  icon,
  className = "",
}: Props) => {
  return (
    <div
      className={
        "p-6 rounded-3xl flex flex-col flex-1 justify-between shadow-[0px_0.5px_0px_0px_#565E7114,0px_0.5px_0px_0px_#3F47591F,0px_1px_0.5px_0px_#00000029] " +
        className
      }
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          {icon}{" "}
          <p className="text-sm leading-22px text-black-600">{description}</p>
        </div>
        <div>
          <Link href={path}>
            <ArrowUpRight className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div>
        <p className="text-2xl text-black-600">{name}</p>
      </div>
    </div>
  );
};
