import { config } from "../config/config";
const axios = require('axios').default;

const requestService = (endpoint)=>{
  return new Promise((resolve, reject)=>{
    axios.get(config.host + endpoint)
    .then((data)=>{
      console.log(data)
      return data
    })
    .catch(()=>{
      return error
    })
  });
}

const loginRequest =(user, password, endpoint)=>{
  return new Promise((resolve,reject)=>{
    axios.get(config.host + endpoint)
    .then((data)=>{
      resolve(data.data);
      return data
    })
    .catch(()=>{
      reject()
      return error
    })
  });
}

export {
  requestService,
  loginRequest
}