import { SectionAlign } from "@/components/shared/SectionAlign";

const ContactUsForm = () => {
  return (
    <SectionAlign>
      <div className="py-32">
        <div className="grid grid-flow-col auto-cols-max md:auto-cols-min gap-x-8">
          <div>
            <div className="mb-4">
              <p className="text-7xl text-black-900 leading-[5rem] font-normal">
                Contact Sales
              </p>
            </div>
            <div>
              <p className="text-xl text-black-secondary leading-8">
                Send us a message and we’ll promptly get back to you.
              </p>
            </div>
          </div>
          <div>Form</div>
        </div>
      </div>
    </SectionAlign>
  );
};

export default ContactUsForm;
