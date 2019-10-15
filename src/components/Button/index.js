import React from "react";
import { ThemeProvider, ButtonStyle } from "./Style";

const Button = ({ children, disabled, color, primary, simple }) => {
  return (
    <ButtonStyle
      disabled={disabled ? "disabled" : null}
      primary={primary ? true : false}
      simple={simple ? true : false}
    >
      {children}
    </ButtonStyle>
  );
};
export default Button;
