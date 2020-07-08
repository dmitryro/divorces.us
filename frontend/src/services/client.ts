// client.js
const axios = require('axios');
var baseUrl = 'http://0.0.0.0:8080/api/';


class Client{

    async all(endpoint) {

        var url = baseUrl+endpoint+"/";


        var r = await axios.get(url, {
            headers: {
            }
        });
        return r;
    }

    async get(endpoint, id) {
        var url = baseUrl+endpoint+"/"+`${id}`+"/";
        var res = await axios.get(url, {
            headers: {
            }
        });
        return res;
    }


    delete(endpoint, id) {
        var url = `${baseUrl}/${endpoint}/${id}`;
        let res = axios.delete(url);
        return res;
    }
     

    post(endpoint, data) {
        var url = `${baseUrl}/${endpoint}`;
        let res = axios.post(url, data);
        return res;
    }

}

const client = new Client();

export default client;
