import axios from "axios";
import { FETCH_FOOD_MENU } from "./actionType";
import parsMenu from "./util/index";
export const fetchFoodMenuAction = () => (dispatch) => {
  return axios
    .get("https://restuarant-2ba4d.firebaseio.com/param.json")
    .then((response) => {
      const data = response.data;
      const menu = parsMenu(data.menu);
      // console.log(menu);

      dispatch({
        type: FETCH_FOOD_MENU,
        payload: {
          categoryList: menu.categoryList
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
