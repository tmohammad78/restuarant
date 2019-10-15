import React from "react";
import styled from "styled-components";

const ButtonBoxStyle = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
`;

const div = ({ className, children }) => (
  <div className={className}>{children}</div>
);

// export const Wrapper = ({ children }) => {
//   return <MainHeader>{children}</MainHeader>;
// };

export const Wrapper = styled(div)`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
`;

export const Buttonz = ({ children }) => {
  return <ButtonBoxStyle>{children}</ButtonBoxStyle>;
};
