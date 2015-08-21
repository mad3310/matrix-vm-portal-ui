var express = require('express');
var router = express.Router();
var getData = require('../data/get-data');
var request = require("request");
var config = require("../config/setup.js");

router.all('*', function(req, res, next) {
    var url = 'http://'+config.BACK_END_SERVER_NAME+':'+config.BACK_END_SERVER_PORT+req.url;
    request({
        method:req.method,
        url:url,
        headers:req.headers
    }).on('error', function(err) {
        err.status = 500;
        var error = 'proxy to backend server error:' + err;
        next(error);
    }).pipe(res);
});

module.exports = router;
