"use client";
import { SectionAlign } from "@/components/shared/SectionAlign";
import FormComponent from "./FormComponent";
import { useState } from "react";
import Image from "next/image";

const ContactUsForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <SectionAlign>
      <div className="py-32 bg-surface-bg">
        {!formSubmitted ? (
          <div className="grid grid-cols-2 gap-x-8">
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
            <div>
              <FormComponent handleFormSubmitted={setFormSubmitted} />
            </div>
          </div>
        ) : (
          <div className="flex gap-x-16 items-center">
            <div className="max-w-[21.75rem]">
              <div className="mb-4">
                <p className="text-7xl text-black-900 leading-[5rem] font-normal">
                  Thank you
                </p>
              </div>
              <div>
                <p className="text-xl text-black-secondary leading-8">
                  A member of our team will be in touch with you shortly.
                </p>
              </div>
            </div>

            <div className="w-60 h-60 relative">
              <Image
                src={"/assets/images/success_illustration.svg"}
                alt="success illustration"
                fill
              />
            </div>
          </div>
        )}
      </div>
    </SectionAlign>
  );
};

export default ContactUsForm;
