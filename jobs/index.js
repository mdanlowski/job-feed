var CronJob = require('cron').CronJob;

const githubJobs = require('./github-jobs.js')
const githubInterval = '* * * * *';

new CronJob(
  githubInterval,
  githubJobs,
  null,
  true,
  'America/Los_Angeles'
);

