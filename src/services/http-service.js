import 'whatwg-fetch';

class HttpService {
    getGifts = () => {

        var promise = new Promise((resolve, reject) => {

            fetch('https://onefreelatte.com/api/gifts')
            .then(response => {
                resolve(response.json());
            })
        });
        return promise;
    }
}

export default HttpService;