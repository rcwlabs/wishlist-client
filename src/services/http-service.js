import 'whatwg-fetch';

class HttpService {
    getProducts = () => {
        fetch('https://onefreelatte.com/api/gifts')
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log('parsed json', json)
        })
        .catch(ex => {
            console.log('parsing failed', ex)
        });
    }
}

export default HttpService;