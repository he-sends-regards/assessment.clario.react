import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";

import { EmailInput, PasswordInput, SignUpRules } from "../components";
import { COLORS } from "../styles/colors";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one digit")
    .required("Required"),
});

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [validationStatus, setValidationStatus] = useState({
    characterCount: false,
    upperCaseAndLowerCase: false,
    oneDigit: false,
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: SignUpSchema,
    onSubmit: () => {
      toast.success("Sign up successful!");
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  const { values, validateForm, handleChange } = formik;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = await validateForm();

    const password = values.password;

    const characterCount = password.length >= 8;
    const upperCaseAndLowerCase =
      /[a-z]/.test(password) && /[A-Z]/.test(password);
    const oneDigit = /\d/.test(password);

    setValidationStatus({
      characterCount,
      upperCaseAndLowerCase,
      oneDigit,
    });

    setIsEmailValid(!formErrors.email);
    setIsPasswordValid(
      characterCount &&
        upperCaseAndLowerCase &&
        oneDigit &&
        !formErrors.password
    );

    setIsSubmitted(true);

    formik.handleSubmit(e);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Sign up</Title>

        <EmailInput
          handleChange={handleChange}
          value={values.email}
          isValid={isEmailValid}
          isSubmitted={isSubmitted}
        />
        <PasswordInput
          handleChange={handleChange}
          value={values.password}
          isValid={isPasswordValid}
          isSubmitted={isSubmitted}
        />

        <SignUpRules
          isSubmitted={isSubmitted}
          characterCount={validationStatus.characterCount}
          upperCaseAndLowerCase={validationStatus.upperCaseAndLowerCase}
          oneDigit={validationStatus.oneDigit}
        />

        <SignUpButton type="submit">Sign up</SignUpButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom right, #f4f9ff, #e0edfb);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  color: ${COLORS.TITLE_TEXT};
  margin-bottom: 20px;
`;

const SignUpButton = styled.button`
  width: 240px;
  height: 48px;
  margin-top: 20px;

  border: 0;

  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.BUTTON.TEXT};

  border-radius: 30px;
  cursor: pointer;
  box-sizing: border-box;

  background: linear-gradient(
    to right,
    ${COLORS.BUTTON.BACKGROUND_LINEAR.FROM},
    ${COLORS.BUTTON.BACKGROUND_LINEAR.TO}
  );
`;

export default SignUp;
