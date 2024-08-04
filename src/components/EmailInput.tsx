import styled from "styled-components";
import { COLORS } from "../styles/colors";

const EmailInput = () => {
  return <Input type="email" placeholder="Email" />;
};

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

export default EmailInput;
