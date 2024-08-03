import styled from "styled-components";
import { COLORS } from "./styles/colors";

function App() {
  return (
    <Wrapper>
      <Title>Sign up</Title>

      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <RulesWrapper>
        <RuleItem>8 characters or more (no spaces)</RuleItem>
        <RuleItem>Uppercase and lowercase letters</RuleItem>
        <RuleItem>At least one digit</RuleItem>
      </RulesWrapper>

      <SignUpButton>Sign up</SignUpButton>
    </Wrapper>
  );
}

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

const Input = styled.input`
  width: 315px;
  height: 48px;
  box-sizing: border-box;
  border: 0;
  border-radius: 10px;
  padding: 14.5px 12px 14.5px 20px;
  font-size: 16px;

  &:focus {
    border: 1px solid ${COLORS.INPUT.BORDER.FOCUS};
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.INPUT.PLACEHOLDER};
  }
`;

const RulesWrapper = styled.div`
  width: 315px;
  padding-left: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const RuleItem = styled.span`
  color: ${COLORS.COMMON_TEXT};
  font-size: 13px;
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

export default App;
