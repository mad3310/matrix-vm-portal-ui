var http = require('http');

exports.getData = function(options, req, res, callback){
    var backEndReq = http.request(options,function(backEndRes){
        options.headers = req.headers;//用用户请求的headers请求后端数据
        backEndRes.setEncoding('utf8');
        backEndRes.on('data',function(chunk){
            var data = JSON.parse(chunk);
            if(data.result == 1){
                if(!req.extraData){
                    req.extraData = {};
                }
                callback(data.data, req);
            }else{
                console.log("get back end data error:" + data.msgs);
                callback(null, req);
            }
        });
    });

    backEndReq.on('error',function(e){
        console.log('problem witn request:'+e.message);
    });

    backEndReq.end();
};
