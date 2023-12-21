import styled, { css } from "styled-components";
import { primaryColor } from "@/lib/colors";

export const ButtonStyle = css`
  cursor: pointer;
  padding: 5px 15px;
  border: 0;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid white;
    `}

    ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;
    `}
    ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #000;
    `}
  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primaryColor};
      color: #fff;
      border: 1px solid ${primaryColor};
    `}

    ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${primaryColor};
      border: 1px solid ${primaryColor};
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
