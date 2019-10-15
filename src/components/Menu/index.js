import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./category";
import { fetchFoodMenuAction } from "../../services/food/action";
const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodMenuAction());
  }, []);
  return (
    <div>
      <Category />
    </div>
  );
};
export default Menu;
