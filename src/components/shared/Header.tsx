import Image from "next/image";
import { SectionAlign } from "./SectionAlign";
import Button from "../custom/Button";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="">
      <div className="h-16 flex justify-between items-center max-w-1312px mx-auto">
        <div className="flex items-center gap-x-1">
          <div className="relative w-24 h-6">
            <Image
              src={"/assets/logos/brinte_logo.svg"}
              alt="brinte logo"
              className=""
              fill
            />
          </div>

          <div className="w-9 h-5 bg-blue-100 rounded-full flex justify-center items-center">
            <p className="text-xxs text-blue-500 font-semibold">BETA</p>
          </div>
        </div>

        <div className="flex gap-x-4 items-center">
          <div className="px-3">
            <Link
              href={"/products"}
              className={`text-sm text-black-label font-medium`}
            >
              Product
            </Link>
          </div>
          <div className="px-3">
            <Link
              href={"/customers"}
              className={`text-sm text-black-label font-medium`}
            >
              Customers
            </Link>{" "}
          </div>
          <div className="px-3">
            <Link
              href={"/docs"}
              className={`text-sm text-black-label font-medium`}
            >
              Docs
            </Link>{" "}
          </div>
          <div className="px-3">
            <Link
              href={"/our-story"}
              className={`text-sm text-black-label font-medium`}
            >
              Our story
            </Link>{" "}
          </div>
          <div className="px-3">
            <Link
              href={"/pricing"}
              className={`text-sm text-black-label font-medium`}
            >
              Pricing
            </Link>{" "}
          </div>
          <div className="px-3">
            <Link
              href={"/contact"}
              className={`text-sm text-black-label font-medium`}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex justify-between gap-x-1">
          <Button className="bg-transparent text-black-label text-13px px-3 font-medium">
            Login
          </Button>
          <Button className="bg-black-900 text-black-on-neutral text-13px w-95px font-medium">
            Join waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
