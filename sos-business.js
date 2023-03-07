// run `node index.js` in the terminal

const axios = require('axios').default;
const token = '4phdkyG3O6cdc5NuKQogP4ehrNEfynV4ISD';
const email = 'electbobmurrell@gmail.com';
const api = 'https://commercialapi.sos.la.gov/api/Commercial/Search';
const searchterm = 'Rouses';
const requestUrl =
  api + `?token=${token}&emailaddress=${email}&entityname=${searchterm}`;
console.log(requestUrl);
axios
  .get(requestUrl)
  .then(function (response) {
    console.log(response);
    //TODO fix this
    //record document, return id
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
return;
