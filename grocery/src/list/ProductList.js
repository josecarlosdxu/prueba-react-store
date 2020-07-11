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

  /*toggleFavourite = () => {
    this.setState({ favourite: !this.state.favourite });
  };

  componentDidMount() {}*/

  render() {

    return (
      <section className="product-list">
        <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />
          <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />
          <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />
          <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />
          <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />
          <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />
          <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />
          <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />
          <ProductCard
                    productName="Unbranded Metal Chair"
                    image_url="https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair"
                    price="50"
                    stock="40"
                    productDescription="Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo."
          />

      </section>
    );
  }
}

export default ProductList;