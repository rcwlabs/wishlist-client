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
        let giftList = this.state.gifts.map(gift => {
            return <Gift giftName={gift.gift}/>
        });
    }

    render () {
        return (
            <div>
                <h1>Hey it's the app</h1>
                {giftList}
            </div>
        );
    };
}