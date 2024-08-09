"use client";
import Button from "@/components/custom/Button";
import { Input } from "@/components/custom/Input";
import Select from "@/components/custom/Select";
import { TextArea } from "@/components/custom/TextArea";
import { useState } from "react";

const FormComponent = () => {
  const [howDidYouFindUs, setHowDidYouFindUs] = useState<string>();
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4 flex-grow">
          <div className="flex-1">
            <Input type="text" placeholder="First name" />
          </div>
          <div className="flex-1">
            <Input type="text" placeholder="Last name" />
          </div>
        </div>
        <div>
          <Input type="email" placeholder="Email" />
        </div>
        <div>
          <Input type="text" placeholder="Company name" />
        </div>
        <div>
          <Input type="text" placeholder="Website URL" />
        </div>
        <div>
          <Select
            placeholder="How did you find us?"
            onChange={(e) => setHowDidYouFindUs(e.target.value as string)}
            value={howDidYouFindUs}
            options={[
              "Search engine",
              "Recommended by friends or colleague",
              "Social media",
              "Blog or publication",
              "Others",
            ]}
          />
        </div>
        <div>
          <TextArea placeholder="Message" />
        </div>

        <div>
          <Button className="bg-primary-border w-[6.75rem] text-primary-on-primary text-13px">
            Contact sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
