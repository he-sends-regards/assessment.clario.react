import { FC, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../styles/colors";

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
  isSubmitted: boolean;
}

const PasswordInput: FC<Props> = ({
  handleChange,
  value,
  isValid,
  isSubmitted,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <PasswordWrapper>
      <Input
        id="password"
        name="password"
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        onChange={handleChange}
        value={value}
        $isValid={isValid}
        $isSubmitted={isSubmitted}
      />
      <Icon
        $isValid={isValid}
        $isSubmitted={isSubmitted}
        onClick={togglePasswordVisibility}
      >
        <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
      </Icon>
    </PasswordWrapper>
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

const PasswordWrapper = styled.div`
  position: relative;
  width: 315px;
`;

const Icon = styled.span<{ $isValid: boolean; $isSubmitted: boolean }>`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ $isValid, $isSubmitted }) =>
    $isSubmitted
      ? $isValid
        ? COLORS.INPUT.ICON.VALID
        : COLORS.INPUT.ICON.INVALID
      : COLORS.INPUT.ICON.DEFAULT};
`;

export default PasswordInput;
