import React, { Component } from "react";
import { fetchAllProducts } from "../actions/index";
import { connect } from "react-redux";
import Product from "./Product";
import Checkout from "./Checkout";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      shopCartOpen: false
    };
  }
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  openShopCart = () => {
    this.setState({ shopCartOpen: !this.state.shopCartOpen });
  };
  render() {
    const allProducts = this.props.products.length ? (
      this.props.products.map(item => (
        <Product
          key={item.id}
          title={item.title}
          style={item.style}
          price={item.price}
          availableSizes={item.availableSizes}
          currencyFormat={item.currencyFormat}
          id={item.id}
        />
      ))
    ) : (
      <h1>Nothing to show</h1>
    );
    return (
      <div>
        <h1 className="site-title">• Online Shop •</h1>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 all-items">{allProducts}</div>
          <div className="col-md-2 shop">
            <i onClick={this.openShopCart} className="fas fa-shopping-cart">
              {" "}
            </i>
            {this.state.shopCartOpen && <Checkout />}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { fetchAllProducts }
)(Dashboard);
