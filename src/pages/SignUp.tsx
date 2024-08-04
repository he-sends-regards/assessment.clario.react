import styled from "styled-components";
import { EmailInput, PasswordInput, SignUpRules } from "../components";
import { COLORS } from "../styles/colors";

const SignUp = () => {
  return (
    <Wrapper>
      <Title>Sign up</Title>

      <EmailInput />
      <PasswordInput />

      <SignUpRules />

      <SignUpButton>Sign up</SignUpButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #f4f9ff, #e0edfb);
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
