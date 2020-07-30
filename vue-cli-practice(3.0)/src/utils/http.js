import axios from "axios";
import qs from "qs";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8"; // 配置请求头
axios.defaults.baseURL = process.env.API_ROOT; // 配置接口地址

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    let userToken = sessionStorage.getItem("token");
    if (userToken) {
      config.headers["Authorization"] = userToken;
    }
    // 在发送请求之前做某件事
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    console.log("错误的传参");
    return Promise.reject(error);
  }
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    // 对响应数据做些事
    if (!res.data.success) {
      return Promise.resolve(res);
    }
    return res;
  },
  error => {
    console.log("网络异常");
    return Promise.reject(error);
  }
);

// 返回一个Promise(发送post请求)
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

// 返回一个Promise(发送get请求)
export function get(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: param })
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

// 返回一个Promise(发送delete请求)
export function deleteData(url, param) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { params: param })
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

// 用户上传文件单独设置请求头为multipart/form-data，且入参不需要序列化
export function postData(url, param) {
  return new Promise((resolve, reject) => {
    var instance = axios.create({
      headers: {
        Authorization: sessionStorage.getItem("token"),
        "Content-Type": "multipart/form-data"
      }
    });
    instance
      .post(url, param)
      .then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

export default {
  post,
  get,
  deleteData,
  postData
};
