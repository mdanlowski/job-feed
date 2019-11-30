const express = require('express');
const app = express();
const port = 4000;

const Ut = require('../md-utils.js');
const routes = {
  github: "/github",
  all: "/all-offers"
}

app.get(routes.all, async (req, res) => {
  Ut.tslog(['GET all', req.headers.host])
  res.send("Soon...")
});

app.get(routes.github, async (req, res) => {
  const data = await Ut.asyncGetKey('github');
  Ut.tslog(['GET github', req.headers.host])

  res.header("Access-Control-Allow-Origin", "*");
  return res.send( data );
});


// Launch
app.listen(port, () => {Ut.tslog(`API started at ${port}`)});