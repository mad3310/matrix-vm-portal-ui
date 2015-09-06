var express = require('express');
var router = express.Router();
var httpProxy = require('http-proxy');
var mock = require('mockjs');
var path = require('path');
var fs = require('fs');

var config = require("../config/setup.js");
var mockPath = path.join(__dirname,'../data/mock_tpl/');

//对白名单api请求做mock数据
for(var i = 0, len = config.mockWhileList.length; i < len; i++){
    router.all(config.mockWhileList[i], function(req, res, next) {
        var fileName = req.url.split('?')[0].split('#')[0].split('/').slice(1).join('_')+'.mock';//根据请求api获取对应文件名称
        console.log(fileName);

        var mockTpl = fs.readFileSync(mockPath+fileName).toString();
        var data = mock.mock(JSON.parse(mockTpl));
        res.send(data);
    });
};

module.exports = router;
