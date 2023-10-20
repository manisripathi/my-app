import * as Yup from "yup";

const ValidationSchema = Yup.object({
  fullName: Yup.string()
    .strict(true)
    .min(3, 'Full name is too short!')
    .max(32, 'Full name is too long!')
    .required("Full name is required!"),
  emailAddress: Yup.string()
    .strict(true)
    .email("Invalid Email Address!")
    .required("Email Address is required!"),
});

export default ValidationSchema;
