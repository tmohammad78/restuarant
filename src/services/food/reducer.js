import { FETCH_FOOD_MENU } from "./actionType";
const initialState = {
  foodItem: {},
  categoryList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_MENU:
      const { foodItem, categoryList } = action.payload;
      return {
        ...state,
        foodItem,
        categoryList
      };
    default:
      return state;
  }
};
