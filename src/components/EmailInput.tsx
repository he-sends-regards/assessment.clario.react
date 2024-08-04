import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { FC } from "react";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
  isSubmitted: boolean;
}

const EmailInput: FC<Props> = ({
  handleChange,
  value,
  isValid,
  isSubmitted,
}) => {
  return (
    <Input
      id="email"
      name="email"
      placeholder="Email"
      onChange={handleChange}
      value={value}
      $isValid={isValid}
      $isSubmitted={isSubmitted}
    />
  );
};

const Input = styled.input<{ $isValid: boolean; $isSubmitted: boolean }>`
  width: 315px;
  height: 48px;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14.5px 45px 14.5px 20px;
  font-size: 16px;
  outline: none;

  &:focus {
    border: 1px solid
      ${({ $isSubmitted }) => ($isSubmitted ? "" : COLORS.INPUT.BORDER.FOCUS)};
    outline: none;
  }

  border: ${({ $isValid, $isSubmitted }) =>
    $isSubmitted
      ? $isValid
        ? `1px solid ${COLORS.INPUT.BORDER.VALID}`
        : `1px solid ${COLORS.INPUT.BORDER.INVALID}`
      : "0"};

  color: ${({ $isValid, $isSubmitted }) =>
    $isSubmitted
      ? $isValid
        ? COLORS.INPUT.TEXT.VALID
        : COLORS.INPUT.TEXT.INVALID
      : COLORS.INPUT.TEXT.DEFAULT};

  &::placeholder {
    color: ${COLORS.INPUT.PLACEHOLDER};
  }
`;

export default EmailInput;
