import styled from "styled-components";
import { COLORS } from "../styles/colors";

const SignUpRules = () => {
  return (
    <RulesWrapper>
      <RuleItem>8 characters or more (no spaces)</RuleItem>
      <RuleItem>Uppercase and lowercase letters</RuleItem>
      <RuleItem>At least one digit</RuleItem>
    </RulesWrapper>
  );
};

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

export default SignUpRules;
