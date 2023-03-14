// run `node index.js` in the terminal
function search_orleansproperty(params, callback) {
  console.log('Starting Orleans property search- basic');
  const axios = require('axios');
  let address = '6334 Canal Blvd'; //TODO take in param
  if (params != null && params.address != null) {
    address = params.address;
  }
  let addressSearch = encodeURIComponent(address);

  //get address candidate
  axios
    .get(
      'https://gis.nola.gov/arcgis/rest/services/Locators/PropertyViewerCompositeLocator/GeocodeServer/findAddressCandidates?outSR=3857&f=json&outFields=Address%2CUser_fld&SingleLine=' +
        addressSearch
    )
    .then((response) => {
      //get x/y for request
      let c = response.data.candidates[0];
      let x = c.location.x;
      let y = c.location.y;
      let searchLocation = encodeURIComponent('{"x":' + x + ',"y":' + y + '}');
      axios
        .get(
          'https://gis.nola.gov/arcgis/rest/services/apps/property3/MapServer/identify?f=json&tolerance=0&returnGeometry=true&returnFieldName=false&returnUnformattedValues=false&imageDisplay=1462%2C712%2C96&geometry=' +
            searchLocation +
            '&geometryType=esriGeometryPoint&sr=102100&mapExtent=-10033557.233911136%2C3492641.7085679607%2C-9977681.766234746%2C3519853.290637447&layers=all%3A13%2C0%2C8%2C3%2C1%2C2%2C4%2C5%2C6%2C7'
        )
        .then((response) => {
          var property = response.data.results[0];
          console.log(property);
          return callback(property);
          //TODO - store response, return document id
        })
        .catch((error) => {
          console.log(error);
          return callback(error);
        });
    })
    .catch((error) => {
      console.log(error);
      return callback(error);
    });
  return;
}
module.exports = {
  search_orleansproperty,
};
