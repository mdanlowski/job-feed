const Utils = require('./utils.js');

const baseUrl = 'https://jobs.github.com/positions.json';

async function getGithubJobs(){
  const query = baseUrl; // + params
  let pageContentSize = 1;
  let page = 0;
  let aggregatedJobs = [];

  while(pageContentSize > 0) {
    let result = await Utils.asyncJson(`${query}?page=${page}`);
    pageContentSize = result.length;
    aggregatedJobs = aggregatedJobs.concat(result);
    
    console.log(new Date, ": get page", page);
    page++;
  }
  console.log(new Date, ": got", aggregatedJobs.length, "offers total");
}


module.exports = getGithubJobs;