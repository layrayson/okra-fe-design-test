import { SectionAlign } from "@/components/shared/SectionAlign";

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
              <div className="row-span-2 col-span-1 ...">01</div>
              <div className="row-span-1 col-span-1 ...">02</div>
              <div className="row-span-1 col-span-1 ...">03</div>
            </div>
          </div>
        </div>
      </SectionAlign>
    </div>
  );
};

export default HelpfulResources;
