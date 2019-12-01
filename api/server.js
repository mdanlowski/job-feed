const express = require('express');
const app = express();
const port = 4000;

const Ut = require('../md-utils.js');
const routes = {
  github: "/github",
  all: "/all-offers",
  info: "/meta/:key?"
}

app.get(routes.all, async (req, res) => {
  Ut.tslog(['GET all', req.headers.host]);
  res.send("Soon...")
});

app.get(routes.github, async (req, res) => {
  Ut.tslog(['GET github', req.headers.host]);
  let data = await Ut.asyncGetKey('github');
  data = await paginate(data, req.query.page, req.query.pagesize);

  res.header("Access-Control-Allow-Origin", "*");
  return res.send( data );
});

app.get(routes.info, async (req, res) => {
  Ut.tslog(['GET meta', req.headers.host, JSON.stringify(req.params)]);
  // let itemCount = await Ut.asyncGetKey('all');
  let itemCount = await Ut.asyncGetKey('github');
  itemCount = JSON.parse(itemCount).length;

  let data = {
    countall: itemCount,
    countgh: itemCount,
  }
  
  if(req.params['key']) data = `[${data[req.params['key']]}]`;
    
  res.header("Access-Control-Allow-Origin", "*");
  return res.send( data );
});


// Launch
app.listen(port, () => {Ut.tslog(`API started at ${port}`)});


async function paginate(data, page, pagesize=10){
  page = parseInt(page) - 1;
  let jData = JSON.parse(data);
  const pageCount = Math.ceil(jData.length / pagesize);
  
  if(page > pageCount) page = pageCount - 1;
  
  let pageData = jData.slice(pagesize * page, pagesize * (page + 1));
  // console.log("fi:", (pagesize*page), "li:", pagesize*(page+1));
  // console.log("first:", pageData[0].title);
  // console.log("last:", pageData[pagesize-1].title);

  return JSON.stringify(pageData);
}