import React, { Component } from 'react';
import ProductList from './list/ProductList';

import './App.css';

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
            </section>
        );
    }
}

export default App;