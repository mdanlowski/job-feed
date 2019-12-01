// Import common utility tools
const Ut = require('../md-utils.js');

const baseUrl = 'https://jobs.github.com/positions.json';

async function getGithubJobs(){
  const query = baseUrl; // @TODO + params
  let pageContentSize = 1;
  let page = 0;
  let aggregatedJobs = [];

  while(pageContentSize > 0) {
    let result = await Ut.asyncJson(
        `${query}?page=${page}`
      );
    pageContentSize = result.length;
    aggregatedJobs = aggregatedJobs.concat(result);
    
    Ut.tslog(["get page", page]);
    page++;
  }
  Ut.tslog(`got ${aggregatedJobs.length} offers total`);
  
  aggregatedJobs = JSON.stringify(aggregatedJobs);
  Ut.asyncSetKey('github', aggregatedJobs).then( () => {
    Ut.tslog('set redis OK');
    Ut.asyncSetKey('githubLast', new Date().toString());
  });
}

getGithubJobs()

module.exports = getGithubJobs;