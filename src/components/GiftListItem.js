import React, { Component } from 'react';

export default class GiftListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <li key={this.props.key}>
                <div className="gift-list-item">
                    <span className="gift-name">{this.props.recipient} </span> <br />
                    <span className="gift-name"> {this.props.giftName} </span> <br />
                    <span className="gift-price"> ${this.props.price} </span> <br />
                    <button className="btn btn-warning">Remove</button>
                </div>
            </li>
        )
    }
}