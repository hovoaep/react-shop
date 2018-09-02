import { products } from "../firebase";
import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const fetchAllProducts = () => dispatch => {
  products.on("value", function(snapshot) {
    dispatch({
      type: FETCH_PRODUCTS,
      payload: snapshot.val().products
    });
    return snapshot.val().products;
  });
};

export const addToCart = id => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: id
  });
};

export const removeFromCart = id => dispatch => {
  console.log("ekav");
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  });
};
