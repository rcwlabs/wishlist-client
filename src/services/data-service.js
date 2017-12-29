import NotificationService, { NOTIF_GIFTLIST_CHANGED } from './notification-service';

let ns = new NotificationService();

let instance = null;
var wishList = [];

export default class DataService {

    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    addGift = (gift) => {
        wishList.push(gift);
        ns.postNotification(NOTIF_GIFTLIST_CHANGED, wishList);
    }

    removeGift = (gift) => {
        for(var i = 0; i < wishList.length; i++) {
            if (wishList[i]._id === gift._id) {
                wishList.splice(i, 1);
                ns.postNotification(NOTIF_GIFTLIST_CHANGED, wishList);
                break;
            }
        }
    }

}