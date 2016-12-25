// Demonstation of integration
var oauthshim = require('./index.js'),
	express = require('express');

var app = express();

// Define a path where to put this OAuth Shim
app.all('/proxy', oauthshim);

// Create a new file called "credentials.json", an array of objects containing {domain, client_id, client_secret, grant_url}
var creds = require({
        "name": "twitter",
        "domain": process.env.DOMAIN,
        "client_id": process.env.TWITTER_CLIENT_ID,
        "client_secret": process.env.TWITTER_CLIENT_SECRET,
        "grant_url": "https://api.twitter.com/oauth/access_token"
    });

// Initiate the shim with credentials
oauthshim.init(creds);

// Set application to listen on PORT
app.listen(process.env.PORT);

console.log('OAuth Shim listening on ' + process.env.PORT);
