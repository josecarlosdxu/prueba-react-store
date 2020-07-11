import React, { Component } from 'react';
import ProductList from './productList/ProductList';
import ShoppingCart from './shoppingCart/ShoppingCart';

import  './App.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            producs: []
        };
    }

    componentDidMount() {
        //const url = '/'
    }

    render() {
        return (
            <section className="App" >
                <ProductList />
                <ShoppingCart />
            </section>
        );
    }
}

export default App;