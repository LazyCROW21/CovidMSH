import axios from 'axios';

const url = 'http://localhost:5000/api';

class APIService {
    static getRequests() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url+"/getrequests");
                const data = res.data;
                resolve(data);
                // resolve(data.map(request => ({
                //     ...request,
                //     createdAt: new Date(request.createdAt)
                // })));
            } catch (err) {
                reject(err);
            }
        })
    }

    static addRequest(data) {
        return axios.post(url+"/addrequest", {
            data
        })
    }

    static deleteRequest(id) {
        return axios.delete(url+`/deleterequest/${id}`);
    }
}

export default APIService;