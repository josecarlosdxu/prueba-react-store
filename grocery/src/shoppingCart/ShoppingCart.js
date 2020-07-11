import React, { Component } from "react";

import "./ShoppingCart.css";


class ShoppingCart extends Component {
  constructor(props) {
  super(props);
  /* this.state = {
      products: []
    };*/
  }







  render() {

    return (
      <aside className="shopping-cart ">
      <header className="shopping-cart-header"><h1 className="shopping-cart-name">Cart</h1></header>
      </aside>
    );
  }
}

export default ShoppingCart;