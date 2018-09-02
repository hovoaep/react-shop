import React, { Component } from "react";
import { removeFromCart } from "../actions/index";
import { connect } from "react-redux";
import CheckoutItem from "./CheckoutItem";

class Checkout extends Component {
  render() {
    const items = this.props.cart.length ? (
      this.props.cart.map((item, index) => {
        let currentItem = this.props.products[item - 1];
        return (
          <CheckoutItem
            title={currentItem.title}
            style={currentItem.style}
            price={currentItem.price}
            id={item}
            key={item}
          />
        );
      })
    ) : (
      <h5>Your cart is empty</h5>
    );
    console.log(items);
    return (
      <div>
        <h3>Your favourite items!</h3>
        {items}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.products.cart
});

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Checkout);
