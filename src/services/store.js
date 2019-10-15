import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default (initialState) => {
  initialState =
    JSON.parse(window.localStorage.getItem("state")) || initialState;
  const middleware = [thunk];
  let enhancer;
  if (process.env.NODE_ENV === "development") {
    enhancer = compose(applyMiddleware(...middleware));
  } else {
    enhancer = compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }

  const store = createStore(reducers, initialState, enhancer);
  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart
    };
    window.localStorage.setItem("state", JSON.stringify(persist));
  });
  return store;
};
