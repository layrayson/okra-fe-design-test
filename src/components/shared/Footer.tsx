import Link from "next/link";
import Button from "../custom/Button";
import Image from "next/image";
import { Brinte, GreenIndicator, LinkedIn, Slack, X, Youtube } from "./Icon";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black-label/[0.19]">
        <div className="max-w-[83rem] mx-auto bg-[url('/assets/images/brinte_bg_text.svg')] bg-no-repeat bg-bottom bg-contain">
          <div className="pt-60 pb-[19.875rem]">
            <div className="max-w-[51.375rem] mx-auto">
              <div className="flex justify-between">
                <div className="w-[18.8125rem]">
                  <Brinte className="h-10 w-10" />
                </div>

                <div className="grow flex gap-x-8">
                  <div className="flex flex-col gap-y-6 min-w-[8.6875rem]">
                    <h5 className="text-xs font-medium leading-22px text-black-subdued">
                      RESOURCES
                    </h5>
                    {[
                      {
                        title: "Products",
                        path: "/products",
                      },
                      {
                        title: "Customers",
                        path: "/customers",
                      },
                      {
                        title: "Docs",
                        path: "/docs",
                      },
                      {
                        title: "Our story",
                        path: "/our-story",
                      },
                      {
                        title: "Pricing",
                        path: "/pricing",
                      },
                    ].map(({ title, path }, index) => (
                      <Link
                        key={"footer-col-1" + index}
                        href={path}
                        className="text-13px text-black-label font-medium leading-5"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-6 min-w-[8.6875rem]">
                    <h5 className="text-xs font-medium leading-22px text-black-subdued">
                      CONNECT WITH US
                    </h5>
                    {[
                      {
                        title: "LinkedIn",
                        path: "/linked",
                        icon: <LinkedIn className="h-4 w-4" />,
                      },
                      {
                        title: "X",
                        path: "/x",
                        icon: <X className="h-4 w-4" />,
                      },
                      {
                        title: "Youtube",
                        path: "/youtube",
                        icon: <Youtube className="h-4 w-4" />,
                      },
                      {
                        title: "Slack",
                        path: "/slack",
                        icon: <Slack className="h-4 w-4" />,
                      },
                    ].map(({ title, path, icon }, index) => (
                      <div
                        key={"footer-col-2" + index}
                        className="flex gap-x-3 items-center"
                      >
                        {icon}
                        <Link
                          href={path}
                          className="text-13px text-black-label font-medium "
                        >
                          {title}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-6 min-w-[8.6875rem]">
                    <h5 className="text-xs font-medium leading-22px text-black-subdued">
                      LEGAL
                    </h5>
                    {[
                      {
                        title: "Theme",
                        path: "/theme",
                      },
                      {
                        title: "Privacy",
                        path: "/privacy",
                      },
                    ].map(({ title, path }, index) => (
                      <Link
                        key={"footer-col-3" + index}
                        href={path}
                        className="text-13px text-black-label font-medium leading-5"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-x-2">
                    <GreenIndicator className="h-4 w-4" />{" "}
                    <p className="text-13px font-medium text-black-label">
                      All systems operational
                    </p>
                  </div>

                  <div>
                    <p className="text-13px font-medium text-black-label">
                      &copy; Brinte {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
