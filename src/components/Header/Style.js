import React from "react";
import styled from "styled-components";
const MainHeader = styled.div`
  background-color: #ffbd41;
`;
const InnerStyle = styled.div`
  padding: 5px 10px;
  position: relative;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const ButtonBoxStyle = styled.div`
  float: right;
`;
const LogoStyle = styled.div`
  float: left;
  transform:'translateY(50%)
`;
export const HeaderMain = ({ children }) => {
  return <MainHeader>{children}</MainHeader>;
};

export const Inner = ({ children }) => {
  return <InnerStyle>{children}</InnerStyle>;
};

export const ButtonBox = ({ children }) => {
  return <ButtonBoxStyle>{children}</ButtonBoxStyle>;
};
export const Logo = ({ children }) => {
  return <LogoStyle>{children}</LogoStyle>;
};
