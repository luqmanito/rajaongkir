const axios = require("axios");

var options = {
  method: "GET",
  url: "https://api.rajaongkir.com/starter/province",
  qs: { id: "12" },
  headers: { key: "a2c6722590d364136ab0bc0bd1d69dbb" },
};

const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${url}`,
    data,
    params,
  });
};

const getCost = (param_id) => {
  console.log('coba');
  const id = param_id;
  const URL = `https://api.rajaongkir.com/starter/province`;
  let qs = { id: 12 };
  let headers = { key: "a2c6722590d364136ab0bc0bd1d69dbb" };

  return axios(options);
};

const promosRepo = {
  getCost,
};

module.exports = promosRepo;
