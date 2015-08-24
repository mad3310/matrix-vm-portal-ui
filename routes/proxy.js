var express = require('express');
var router = express.Router();
var getData = require('../data/get-data');
var httpProxy = require('http-proxy');
var config = require("../config/setup.js");

var serverAddr = 'http://'+config.backEndServerName+':'+config.backEndServerPort;
var proxy = httpProxy.createProxyServer({target : serverAddr});

//对所有页面请求白名单做代理
for(var i = 0, len = config.whileList.length; i < len; i++){
    router.all(config.whileList[i], function(req, res, next) {
        proxy.web(req, res, function(e) {
            var err = new Error('page proxy to backend server error');
            err.status = 500;
            next(err);
        });
    });
};

//对所有数据接口白名单做代理
for(i = 0, len = config.whileApiList.length; i < len; i++){
    router.all(config.whileApiList[i], function(req, res, next) {
        proxy.web(req, res, function(e) {
            var err = new Error('api proxy to backend server error:' + e.message);
            err.status = 500;
            next(err);
        });
    });
};

module.exports = router;
