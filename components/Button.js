import styled, { css } from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  border: 0;
  border-radius: 5px;
  display: inline-flex;
  svg{
    height: 16px;
  }
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
    props.primary &&
    css`
      background-color: #5542f6;
      color: #fff;
      border: 1px solid #5541f6;
    `}
  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg{
        height: 20px;
      }
    `}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
