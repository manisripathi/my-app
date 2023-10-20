import React from "react";
import { useFormik } from "formik";
import validationSchema from "../schemas/form1.schema";
import { Button, TextField, Typography } from "@mui/material";

interface OwnProps {}

interface IFormValues {
  fullName: string;
  emailAddress: string;
}

const initialValues: IFormValues = {
  fullName: "",
  emailAddress: "",
};

const Form1Component = ({}: OwnProps) => {
  const onSubmit = (values: IFormValues) => {
    // Handle form submission logic here
    // like making an API call or updating the store
    console.log(values);
  };

  const validate = (values: IFormValues) => {
    // Implement form validation logic
    // Eg. Custom form validations
    // Eg. Form validations based on other form fields
  };

  const formik = useFormik<IFormValues>({
    validationSchema,
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <React.Fragment>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Login Form
          </Typography>
          <TextField
            label="Full Name"
            variant="outlined"
            color="primary"
            type="text"
            name="fullName"
            placeholder="John Doe"
            sx={{ mb: 3 }}
            fullWidth
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            color="primary"
            type="email"
            name="emailAddress"
            placeholder="john@johndoe.com"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.emailAddress && Boolean(formik.errors.emailAddress)
            }
            helperText={
              formik.touched.emailAddress && formik.errors.emailAddress
            }
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            size="medium"
            disabled={!formik.isValid}
          >
            Register
          </Button>
        </form>
      </React.Fragment>
    </div>
  );
};

export default Form1Component;
