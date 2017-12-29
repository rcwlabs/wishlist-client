export const NOTIF_GIFTLIST_CHANGED = 'notif_giftlist_changed';

var observers = {};
let instance = null;

export default class NotificationService {

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        for (var i = 0; i < obs.length; i++) {
            var obj = obs[x];
            obj.callback(data);
        }
    }

    addObserver = (notifName, observer, callback) => {
        let obs = observers[notifName];

        if (!obs) {
            observers[notifName] = [];
        }

        let obj = {observer: observer, callback: callback};
        observers[notifName].push(obj);
    }

    removeObserver = (observer, notifName) => {
        var obs = observers[notifName];

        if (obs) {
            for (var i = 0; i < obs.length; i++) {
                if (observer === obs[x].observer) {
                    obs.splice(i, 1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }

}