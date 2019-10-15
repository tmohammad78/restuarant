import React from "react";
import axios from "axios";
import { FETCH_COVER } from "./actionType";

export const fetchCover = () => (dispatch) => {
  return axios
    .get("https://restuarant-2ba4d.firebaseio.com/param/vendor.json")
    .then((response) => {
      //   console.log("vendor", response.data);

      dispatch({
        type: FETCH_COVER,
        coverData: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
