import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../styles/colors";

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <PasswordWrapper>
      <Input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
      />
      <Icon onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
      </Icon>
    </PasswordWrapper>
  );
};

const PasswordWrapper = styled.div`
  position: relative;
  width: 315px;
`;

const Input = styled.input`
  width: 315px;
  height: 48px;
  box-sizing: border-box;
  border: 0;
  border-radius: 10px;
  padding: 14.5px 45px 14.5px 20px;
  font-size: 16px;

  &:focus {
    border: 1px solid ${COLORS.INPUT.BORDER.FOCUS};
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.INPUT.PLACEHOLDER};
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${COLORS.INPUT.ICON};
`;

export default PasswordInput;
