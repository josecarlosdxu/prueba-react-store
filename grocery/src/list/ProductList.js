import React, { Component } from "react";
import ProductCard from "../card/ProductCard";
import "./ProductList.css";


class ProductList extends Component {
  constructor(props) {
    super(props);
   this.state = {
      products: []
    };
  }

  toggleFavourite = () => {
    this.setState({ favourite: !this.state.favourite });
  };

  componentDidMount() {


    fetch('/grocery/?_page=1')
      .then(res => res.json(), {method: 'get'})
      .then(
        (result) => {
           this.setState({
            products: result
          });

        },
       (error) => {
          /*this.setState({
            isLoaded: true,
            error
          });*/
        }
      )
  }
/*<ProductCard
            productName={e.productName}
            image_url={e.image_url}
            key={i}
            price={e.price}
            onClick={this.props.showPadName}
            disabled={disabled}
            url={e.url}
            volume={this.props.volume}
          />
*/





  render() {
    const { products } = this.state;

    return (
      <section className="product-list">

       {products.map((e, i) => (
          <ProductCard
            productName={e.productName}
            image_url={e.image_url}
            key={i}
            price={e.price}
            stock={e.stock}
            productDescription={e.productDescription}

          />
        ))}




      </section>
    );
  }
}

export default ProductList;