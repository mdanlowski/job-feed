const fetch = require('node-fetch');

var Utils = {
  fetch: fetch,
  asyncJson: async function(url){
    let response = await fetch(url);
    return response.json();
  }
}

module.exports = Utils;