import React, { Component } from 'react';

import GiftListItem from './GiftListItem';

export default class GiftList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            giftList: [
                {   key: 'slkdfjlsdk',
                    recipient: 'Janel',
                    giftName: 'Car',
                    price: 23000
                },
                {   key: 'slkdlkjllk',
                    recipient: 'Janel',
                    giftName: 'House',
                    price: 323000
                },
                {   key: 'sljjklksdk',
                    recipient: 'Janel',
                    giftName: 'Purse',
                    price: 200
                }
            ]
        };

        this.buildGiftList = this.buildGiftList.bind(this);
    }

    buildGiftList() {
        return this.state.giftList.map(gift => {
            return (
                <GiftListItem
                    key={gift.key}
                    recipient={gift.recipient}
                    giftName={gift.giftName}
                    price={gift.price}
                />
            )
        });
    }

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-header">Gift List</h4>
                    <ul>
                        {this.buildGiftList()}
                    </ul>
                </div>
            </div>
        )
    }
}