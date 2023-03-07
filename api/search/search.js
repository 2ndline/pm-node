const express = require('express');
const app = express();
app.use(express.json());
const orleansproperty = require('./search_orleansproperty');
//READ Request Handlers
app.get('/', (req, res) => {
  res.send('Yo');
});

app.get('/search', (req, res) => {
  if (req == null || req.parameters == null) {
    res.send('no params');
    return;
  }
  const result = orleansproperty.search_orleansproperty(req.parameters);
  res.send('TODO');
});

//CREATE Request Handler
app.post('/search/advanced', (req, res) => {
  res.send('TODO');
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
