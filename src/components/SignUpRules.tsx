import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { FC } from "react";

interface Props {
  isSubmitted: boolean;
  characterCount: boolean;
  upperCaseAndLowerCase: boolean;
  oneDigit: boolean;
}

const SignUpRules: FC<Props> = ({
  isSubmitted,
  characterCount,
  upperCaseAndLowerCase,
  oneDigit,
}) => {
  return (
    <RulesWrapper>
      <RuleItem isSubmitted={isSubmitted} isValid={characterCount}>
        8 characters or more (no spaces)
      </RuleItem>
      <RuleItem isSubmitted={isSubmitted} isValid={upperCaseAndLowerCase}>
        Uppercase and lowercase letters
      </RuleItem>
      <RuleItem isSubmitted={isSubmitted} isValid={oneDigit}>
        At least one digit
      </RuleItem>
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

const RuleItem = styled.span<{ isSubmitted: boolean; isValid: boolean }>`
  color: ${({ isSubmitted, isValid }) =>
    isSubmitted
      ? isValid
        ? COLORS.RULES.VALID
        : COLORS.RULES.INVALID
      : COLORS.COMMON_TEXT};
  font-size: 13px;
`;

export default SignUpRules;
