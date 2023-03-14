const express = require('express');
const app = express();
app.use(express.json());
const orleansproperty = require('./search_orleansproperty');
//READ Request Handlers
app.get('/', (req, res) => {
  let address = '6334 Canal Blvd';
  orleansproperty.search_orleansproperty(
    { address: address },
    function (response) {
      res.send(response);
    }
  );
});

app.get('/search', (req, res) => {
  if (req == null || req.parameters == null) {
    res.send('no params');
    return;
  }

  orleansproperty.search_orleansproperty(req.parameters, function (response) {
    res.send(response);
  });
});

//CREATE Request Handler
app.post('/search/advanced', (req, res) => {
  res.send('TODO');
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
