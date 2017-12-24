import 'whatwg-fetch';

export default class HttpService {
    getProducts = () => {
        fetch('https:onefreelatte.com/api/gifts')
        .then(res => {
            console.log(res.json());
        });
    }
}