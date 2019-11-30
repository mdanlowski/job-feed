const { promisify } = require('util');
const fetch = require('node-fetch'),
      redis = require('redis'),
      client = redis.createClient();

var Utils = {
  /* Direct node fetch */
  fetch: fetch,
  /* Direct json response, call with await */
  asyncJson: async function(url){
    let response = await fetch(url);
    return response.json();
  },
  
  /* Set a Redis entry */
  asyncSetKey: promisify(client.set).bind(client),
  /* Retrieve a Redis entry */
  asyncGetKey: promisify(client.get).bind(client),


  /* timestamp in locale */
  ts: () => new Date().toLocaleString(),
  /* log message with timestamp */
  tslog: (message) => {
    if(Array.isArray(message)) {
      message = message.join(' ');
    }
    console.log(new Date().toLocaleString(), ":", message);
  }
  
}

module.exports = Utils;