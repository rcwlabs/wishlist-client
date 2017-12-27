import React, { Component } from 'react';

export default class Gift extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div className="card">
                <div className="card-header"><h4>{this.props.recipient}</h4></div>
                <div className="card-block">
                    <h5 className="card-text">{this.props.giftName}</h5>
                    <p className="card-text">Price: ${this.props.price}</p>
                    <p className="card-text">Store: {this.props.store}</p>
                    <p className="card-text">Notes: {this.props.notes}</p>
                    <a href="#" className="btn btn-primary">Purchased</a>
                </div>
            </div>
        );
    }
}