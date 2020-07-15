import React, { Component } from "react";

import "./CartItem.css";


class CartItem extends Component {
  constructor(props) {
  super(props);
  /* this.state = {
      products: []
    };*/
  }







  render() {
    const { productName, image_url, price } = this.props;

    return (
      <article className="cart-item">
      <figure className="card-item-product">
         <img src={image_url} alt={productName}  className="card-item-thumb"/>
      <figcaption className="cart-item-title"> 
        {productName}
      </figcaption >
      {price}

      </figure>
       
      </article>
    );
  }
}

export default CartItem;

