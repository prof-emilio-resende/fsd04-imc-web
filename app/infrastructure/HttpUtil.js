export default class HttpUtil {
    constructor() {}

    get(hostname, path) {
        return fetch(`${hostname}${path}`)
    }

    post(hostname, path, obj) {
        const opt = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        };

        return fetch(`${hostname}${path}`, opt);
    }
}