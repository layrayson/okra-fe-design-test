import * as yup from "yup";
import { ContactusFormInput } from "../types";

export const contactusFormSchema: yup.ObjectSchema<ContactusFormInput> = yup
  .object()
  .shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    companyName: yup.string().required("Company name is required"),
    websiteURL: yup.string().url("Invalid URL"),
    howDidYouFindUs: yup.string().required("Required information"),
    message: yup.string().required("Message is required"),
  });

export const initialContactUseFormDetails: ContactusFormInput = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  howDidYouFindUs: "",
  message: "",
};
