import React, { Component } from 'react';

import HttpService from '../services/http-service';
import Gift from './Gift';

const http = new HttpService();

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            gifts: []
        };

        this.loadData = this.loadData.bind(this);
        this.loadData();

        this.buildList = this.buildList.bind(this);
        this.buildList();
    }

    loadData = () => {
        http.getGifts().then(gifts => {
            this.setState({
                gifts: gifts
            })
            console.log(this.state.gifts);
        }, err => {

        });
    }

    buildList = () => {
        return this.state.gifts.map(gift => {
            return(
                <Gift 
                    recipient={gift.recipient}
                    price={gift.price}
                    giftName={gift.gift}
                    notes={gift.notes}
                    store={gift.store}
                />
            )
        });
    }

    render () {
        return (
            <div>
                <h2>My Gift List</h2>
                {this.buildList()}
            </div>
        );
    };
}