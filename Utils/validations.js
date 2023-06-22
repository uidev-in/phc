import * as yup from "yup";

export const formValidation = yup.object({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .test("Validate Email", "Please Enter a Valid Email", (value) => {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return mailformat.test(String(value).toLowerCase());
    }),
  mobile: yup
    .string()
    .required("Phone Number is required")
    .min(6, "Phone Number is required"),
  message: yup.string().required("Message is required"),
});
