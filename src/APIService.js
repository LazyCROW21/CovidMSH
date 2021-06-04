import axios from "axios";
import { Cookie } from "express-session";

const url = "http://localhost:5000/api";
const loginurl = "http://localhost:5000";

class APIService {
  static async login(username, password) {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    };
    var result;
    await axios.post(loginurl + "/login", params, config)
    .then((response) => {
      console.log(response);
      result = response.data;
    }).catch((error) => {
      console.log(error);
      result = {login: "fail"};
    });
    // const cookie = resp.headers["set-cookie"];
    // console.log(cookie);
    // console.log(resp);
    // // console.log(resp.headers);
    // // const cookie = resp.headers["set-cookie"][0];
    // // axios.defaults.headers.Cookie = cookie;
    return result;
  }

  static checkLogin() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(loginurl + "/loginsuccess");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static logout() {
    return axios.delete(loginurl + "/logout");
  }

  static getMetaData() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/getmetadata");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

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
