var rp = require('request-promise');
var chalk = require('chalk');

var orgName = process.argv[2];
var requestOptions = {
    headers: {
    	'User-Agent': 'Request-Promise'
    }
};
var apiEndPoints = {
	listOrgRepos: `/orgs/${orgName}/repos`
}
var baseUrl = 'https://api.github.com';

if (!orgName) {
	console.log(chalk.red('Please provide the org name as a parameter to this script'));
}

var url = baseUrl + apiEndPoints.listOrgRepos;

requestOptions.uri = url;

// var reposPromise = rp(requestOptions);
var reposPromise = rp(requestOptions);

reposPromise
	.then(function(repos) {
		repos = JSON.parse(repos);

		repos.forEach(function(repo) {
			console.log(repo.name);
		});
	})
	.catch(function(error){
		//report the http error status
		//show the error message in red
		//don't show anything else
		console.log(chalk.red(error.message));
	});