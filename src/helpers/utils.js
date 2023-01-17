const axios = require('axios');

var options = {
  method: "GET",
  url: "https://api.rajaongkir.com/starter/province",
  qs: { id: "12" },
  headers: { key: "your-api-key" },
};

export const getCost = (param_id) => {
  console.log('coba');
  const id = param_id;
  const URL = `https://api.rajaongkir.com/starter/province?id=${id}`;
  return axios.get(URL, {
    headers: {
      key: "a2c6722590d364136ab0bc0bd1d69dbb",
    },
  });
};
