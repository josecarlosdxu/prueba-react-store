import React, { Component } from "react";
import Icon from "../icon/Icon";
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
               <button className={favourite ? "icon-button has-selected" : "icon-button"}onClick={this.toggleFavourite}>
                  <Icon />
              </button>
          <img src={image_url} alt={productName}  className="product-card-image"/>
          <section  className="product-card-content">
              <p className="product-card-name" title="{productName}">{productName}</p>
               <p className="product-card-price">{price}<data>$</data></p>
              <p className="product-card-description" title="{productDescription}">{productDescription}</p>
              <p className="product-card-stock">{stock} left</p>
              <button className="product-card-add">+ add</button>
          </section>

      </article>
        );
    }
}

export default ProductCard;