import { Input } from "@/components/custom/Input";

const FormComponent = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-4 flex-grow">
          <div className="flex-1">
            <Input placeholder="First name" />
          </div>
          <div className="flex-1">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
