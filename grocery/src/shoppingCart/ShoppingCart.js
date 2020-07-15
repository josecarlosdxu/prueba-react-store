import React, { Component } from "react";
import CartItem from "../cartItem/CartItem";

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
      <section className="shopping-cart-container">
        <div className="shopping-cart-content">
          <CartItem 
          image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
          productName="Unbranded Metal Chair"
          price="43"

          />
          
        </div>
      </section>
      <footer className="shopping-cart-resume">
        <button className="shopping-cart-button-shop">Make a payment</button>
      </footer>
      </aside>
    );
  }
}

export default ShoppingCart;
