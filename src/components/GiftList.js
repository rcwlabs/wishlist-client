import React, { Component } from 'react';

export default class GiftList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-header">Gift List</h4>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>
            </div>
        )
    }
}