import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import store from "./services/store.js";

const Root = ({ children, initialState = {} }) => {
  return <Provider store={store(initialState)}>{children}</Provider>;
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object.isRequired
};

export default Root;
