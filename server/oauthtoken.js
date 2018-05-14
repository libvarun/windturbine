'use strict';

// web framework
var express = require('express');
var router = express.Router();
var request = require("request");
// Forge NPM
var forgeSDK = require('forge-apis');

// actually perform the token operation
var oauth = require('./OAuth');
var currentToken;
// Endpoint to return a 2-legged access token
router.get('/api/forge/oauth/token', function (req, res) {
    oauth.getTokenPublic().then(function (credentials) {
        console.log('credentials')
        console.log(credentials)
        currentToken = credentials.access_token;
        res.json({ access_token: credentials.access_token, expires_in: credentials.expires_in });
    }).catch(function (error) {
        console.log('Error at OAuth Token:');
        console.log(error);
        res.status(500).json(error);
    });
});
router.get('/metadata', function (req, res) {
    console.log('metadata')
    console.log(currentToken)
    // res.end('response')
    //   request({
    //     url: 'https://developer.api.autodesk.com/modelderivative/v2/designdata/dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLnpleXM3WFBlVGd1cVBjX09EWkJia1E_dmVyc2lvbj0x/metadata',
    //     method: 'GET',
    //     headers: {
    //       'Authorization': 'Bearer ' + currentToken
    //     },
    //     'dataType': "json",
    //     },
    //     function(error, response) {
    //       console.log(response)
    //       res.end(response)
    //     });
});
module.exports = router;