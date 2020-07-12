import React, { Component } from "react";
import IconHeart from "../icons/IconHeart";
import IconCart from "../icons/IconCart";
// import heart from "../static/heart.svg";
import "./ProductCard.css";

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: false,
            stock: props.stock
        };
    }

    toggleFavourite = () => {
        this.setState({ favourite: !this.state.favourite });
    };

    componentDidMount() {}

    render() {
        const { productName, image_url, price, productDescription } = this.props;
        const { favourite, stock } = this.state;
        return (
            <article className="product-card">
               <button title="add to favourites" className={favourite ? "icon-button has-selected" : "icon-button"}onClick={this.toggleFavourite}>
                  <IconHeart />
              </button>
          <img src={image_url} alt={productName}  className="product-card-image"/>
          <section  className="product-card-content">
              <p className="product-card-name" title="{productName}">{productName}</p>
               <p className="product-card-price">{price}<data>$</data></p>
              <p className="product-card-description" title="{productDescription}">{productDescription}</p>
              <p className="product-card-stock">{stock} left</p>
              <button className="product-card-add" title="add to cart">
               <IconCart />
               </button>
          </section>

      </article>
        );
    }
}

export default ProductCard;