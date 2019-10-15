import React from "react";
import Button from "../Button";
import { HeaderMain, Inner ,ButtonBox , Logo } from "./Style";

const Header = () => {
  return (
    <HeaderMain>
      <Inner>
        <ButtonBox>
          <Button simple> ورود </Button>
          <span
            style={{
              color: "white",
              paddingRight: 5,
              paddingLeft: 5
            }}
          >
            /
          </span>
          <Button simple> عضویت </Button>
        </ButtonBox>
        <Logo>logo</Logo>
      </Inner>
    </HeaderMain>
  );
};
export default Header;
