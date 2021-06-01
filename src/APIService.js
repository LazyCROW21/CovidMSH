import axios from "axios";

const url = "http://localhost:5000/api";

class APIService {
  static getRequests() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/getrequests");
        const data = res.data;
        resolve(data);
        // resolve(data.map(request => ({
        //     ...request,
        //     createdAt: new Date(request.createdAt)
        // })));
      } catch (err) {
        reject(err);
      }
    });
  }

  static addRequest(data) {
    return axios.post(url + "/addrequest", data);
  }

  static markComplete(id) {
    return axios.put(url + `/requestcompleted/${id}`);
  }

  static deleteRequest(id) {
    return axios.delete(url + `/deleterequest/${id}`);
  }

  static getArticles() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/getarticles");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static addArticle(data) {
    return axios.post(url + `/addarticle`, data);
  }

  static editArticle(id, data) {
    return axios.put(url + `/updatearticle/${id}`, data);
  }

  static deleteArticle(id) {
    return axios.delete(url + `/deletearticle/${id}`);
  }

  static getMessages() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/getmessages");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static addMessage(data) {
    return axios.post(url + "/addmessage", data);
  }

  static deleteMessage(id) {
    return axios.delete(url + `/deletemessage/${id}`);
  }
}

export default APIService;
