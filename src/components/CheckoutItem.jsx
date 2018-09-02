import React, { Component } from "react";
import { storage } from "../firebase";
import { removeFromCart } from "../actions/index";
import { connect } from "react-redux";

class CheckoutItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }
  componentDidMount() {
    (async () => {
      let url = await storage.child(`${this.props.id}.jpeg`).getDownloadURL();
      this.setState({ image: url });
    })();
  }
  removeItem = () => {
    let index = this.props.cart.indexOf(this.props.id);
    let oldCart = [...this.props.cart];
    oldCart.splice(index, 1);
    this.props.removeFromCart(oldCart);
  };
  render() {
    return (
      <div className="fav-items">
        <h4>{this.props.title}</h4>
        <p>{this.props.style}</p>
        <b style={{ fontSize: "23px", marginRight: "10px" }}>
          {this.props.price}$
        </b>
        <i className="fas fa-trash" onClick={this.removeItem} />
        <img
          src={
            this.state.image
              ? this.state.image
              : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          }
          alt=""
        />
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
)(CheckoutItem);
