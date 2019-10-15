import { FETCH_COVER } from "./actionType";

const initialState = {
  coverData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVER:
      const { coverData } = action;
      return {
        ...state,
        coverData
      };
    default:
      return state;
  }
};
