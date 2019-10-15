import React from "react";
import styled, { ThemeProvider } from "styled-components";
import styledProps from "styled-props";
import { darken } from "polished";

const backgroundColor = {
  primary: "#FFBD41",
  simple: "transparent"
};

const textColor = {
  primary: "whiCoverMainte",
  simple: "white"
};

export const ButtonStyle = styled.button`
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "none" : "pointer")};
  border: 1px solid ${styledProps(textColor)};
  border-radius: 5px;
  background-color: ${styledProps(backgroundColor) || "none"};
  color: ${styledProps(textColor) || "black"};
  outline: none;
  padding: 8px 15px;
  $transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: ${(props) =>
      darken(0.2, styledProps(backgroundColor)(props))};
  }
  &:active {
    transform: scale(0.98);
  }
`;

ButtonStyle.defaultProps = {
  color: "simple"
};

// styledProps(background)(props)
// Button.defaultProps = {
//   theme: {
//     main: "red"
//   }
// };

const theme = {
  fontSize: "16px",
  main: "blue"
};
// export const ButtonStyle = ({ children, disabled }) => {
//   return <Button disabled={disabled ? "disabled" : none}>{children}</Button>;
// };
