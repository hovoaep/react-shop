import React, { Component } from "react";
import { storage } from "../firebase";
import { addToCart } from "../actions/index";
import { connect } from "react-redux";

class Product extends Component {
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

  addToCart = () => {
    const id = this.props.id;
    if (!this.props.cart.includes(id)) {
      this.props.addToCart(id);
    } else {
      alert("You already have this item ");
    }
  };

  render() {
    return (
      <div
        className="card card-cascade card-ecommerce wider"
        style={{
          width: "23rem",
          display: "inline-block",
          marginBottom: "20px"
        }}
      >
        <div className="view view-cascade overlay">
          <img
            className="card-img-top"
            src={
              this.state.image
                ? this.state.image
                : "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            }
            alt=""
          />
          <a>
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        <div className="card-body card-body-cascade text-center">
          <h5>Category</h5>
          <h4 className="card-title">
            <strong>
              <a href="">{this.props.title}</a>
            </strong>
          </h4>

          <p className="card-text">{this.props.style}</p>

          <div className="card-footer">
            <span className="float-left">
              {this.props.price}
              {this.props.currencyFormat}
            </span>
            <span className="float-right">
              <a
                className="active"
                data-toggle="tooltip"
                data-placement="top"
                title="Added to Wishlist"
              >
                <i onClick={this.addToCart} className="fa fa-heart" />
              </a>
            </span>
          </div>
        </div>
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
  { addToCart }
)(Product);
