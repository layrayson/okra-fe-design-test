"use client";
import Button from "@/components/custom/Button";
import { Input } from "@/components/custom/Input";
import Select from "@/components/custom/Select";
import { TextArea } from "@/components/custom/TextArea";
import { Spinner } from "@/components/shared/Icon";
import {
  contactusFormSchema,
  initialContactUseFormDetails,
} from "@/lib/schemas";
import { useFormik } from "formik";
import { useState } from "react";

type Props = {
  handleFormSubmitted: (val: boolean) => void;
};
const FormComponent = ({ handleFormSubmitted }: Props) => {
  const [howDidYouFindUs, setHowDidYouFindUs] = useState<string>();
  const [isPending, setisPending] = useState(false);
  const { handleSubmit, errors, values, touched, setFieldValue } = useFormik({
    initialValues: initialContactUseFormDetails,
    enableReinitialize: true,
    validateOnMount: false,
    validateOnChange: true,
    validationSchema: contactusFormSchema,
    onSubmit: (values) => {
      setisPending(true);
      setTimeout(() => {
        setisPending(false);
        handleFormSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 2000);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <div className="flex gap-x-4 flex-grow">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="First name"
                value={values.firstName}
                onChange={(e) => setFieldValue("firstName", e.target.value)}
                error={!!(errors.firstName && touched.firstName)}
                errorText={errors.firstName}
              />
            </div>
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Last name"
                value={values.lastName}
                onChange={(e) => setFieldValue("lastName", e.target.value)}
                error={!!(errors.lastName && touched.lastName)}
                errorText={errors.lastName}
              />
            </div>
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
              error={!!(errors.email && touched.email)}
              errorText={errors.email}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Company name"
              value={values.companyName}
              onChange={(e) => setFieldValue("companyName", e.target.value)}
              error={!!(errors.companyName && touched.companyName)}
              errorText={errors.companyName}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Website URL"
              value={values.websiteURL}
              onChange={(e) => setFieldValue("websiteURL", e.target.value)}
              error={!!(errors.websiteURL && touched.websiteURL)}
              errorText={errors.websiteURL}
            />
          </div>
          <div>
            <Select
              placeholder="How did you find us?"
              onChange={(e) =>
                setFieldValue("howDidYouFindUs", e.target.value as string)
              }
              value={values.howDidYouFindUs}
              options={[
                "Search engine",
                "Recommended by friends or colleague",
                "Social media",
                "Blog or publication",
                "Others",
              ]}
              error={!!(errors.howDidYouFindUs && touched.howDidYouFindUs)}
              errorText={errors.howDidYouFindUs}
            />
          </div>
          <div>
            <TextArea
              placeholder="Message"
              value={values.message}
              onChange={(e) => setFieldValue("message", e.target.value)}
              error={!!(errors.message && touched.message)}
              errorText={errors.message}
            />
          </div>

          <div>
            <Button
              type="submit"
              onClick={() => console.log({ errors, values }, "errors")}
              className={`${
                !isPending
                  ? "bg-primary-border  min-w-[6.75rem] text-primary-on-primary"
                  : "bg-black-200  min-w-[10.25rem] text-black-subdued"
              } text-13px gap-x-2 transition-[width] duration-500`}
            >
              {isPending && <Spinner className="w-4 h-4 animate-spin" />}
              {!isPending ? "Contact sales" : "Sending message..."}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
