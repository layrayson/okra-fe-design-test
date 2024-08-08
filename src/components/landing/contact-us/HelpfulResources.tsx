import { SectionAlign } from "@/components/shared/SectionAlign";
import { CardComponent } from "../common/CardComponent";
import { Book, BookOpen, Slack } from "@/components/shared/Icon";

const HelpfulResources = () => {
  return (
    <div className="bg-black-on-neutral py-32">
      <SectionAlign>
        <div>
          <div className="max-w-[24.6875rem] mb-20">
            <div>
              <div className="mb-4">
                <p className="text-7xl text-black-900 leading-[5rem] font-normal">
                  Helpful resources
                </p>
              </div>
              <div>
                <p className="text-xl text-black-secondary leading-8">
                  Find helpful tools, tips, and materials from our community,
                  help center, and docs.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-rows-2 grid-cols-2 grid-flow-col gap-4">
              <div className="row-span-2 col-span-1">
                <CardComponent
                  name={"Brinte docs"}
                  description={"See Brinte docs"}
                  path={"/docs"}
                  icon={<BookOpen className="w-4 h-4" />}
                  className={"bg-primary-400 h-[23.25rem]"}
                />
              </div>
              <div className="row-span-1 col-span-1">
                {" "}
                <CardComponent
                  name={"Brinte community"}
                  description={"Join Slack community"}
                  path={"/community"}
                  icon={<Slack className="w-4 h-4" />}
                  className={"bg-orange-400 h-full"}
                />
              </div>
              <div className="row-span-1 col-span-1">
                {" "}
                <CardComponent
                  name={"Brinte support"}
                  description={"Go to help center"}
                  path={"/support"}
                  icon={<Book className="w-4 h-4" />}
                  className={"bg-white h-full"}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionAlign>
    </div>
  );
};

export default HelpfulResources;
