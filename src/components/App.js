import React, { Component } from 'react';

import HttpService from '../services/http-service';

const http = new HttpService();

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 

        };

        http.getProducts();
    }

    render () {
        return (
            <div>
                <h1>Hey it's the app</h1>
            </div>
        );
    };
}