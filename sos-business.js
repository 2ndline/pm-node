// run `node index.js` in the terminal

const axios = require('axios');
const token = '4phdkyG3O6cdc5NuKQogP4ehrNEfynV4ISD';
const email = 'electbobmurrell@gmail.com';
const api = 'https://commercialapi.sos.la.gov/api/';
const data = {
  Token: token,
  EmailAddress: email,
  EntityName: 'Rouses',
};
axios
  .post(api + 'Commercial/Search', data)
  .then((response) => {
    //TODO fix this
    //record document, return id
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
return;
