import React, { Component } from 'react';

export default class Gift extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div>
                <img className="card-img-top" alt="Gift"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.gifts.gift}</h4>
                    <p className="card-text">Price: $</p>
                    <a href="#" className="btn btn-primary">Add to list</a>
                </div>
            </div>
        );
    }
}