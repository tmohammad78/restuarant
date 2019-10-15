import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Category = () => {
  const Wrapper = styled.div`
    background-color: red;
    width: 100px;
  `;
  const category = useSelector((state) => state.menu.categoryList);
  return (
    <Wrapper>
      Category
      {category.map((item, i) => {
        return <div key={i}>{item.title}</div>;
      })}
    </Wrapper>
  );
};
export default Category;
