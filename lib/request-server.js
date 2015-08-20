var http = require('http');

exports.getData = function(options, req, res, callback){
    options.headers = req.headers;//用用户请求的headers请求后端数据
    options.headers["x-requested-with"] = "XMLHttpRequest";
    var backEndReq = http.request(options,function(backEndRes){
        backEndRes.setEncoding('utf8');
        backEndRes.on('data',function(chunk){
            var data = JSON.parse(chunk);
            if(data.result == '1'){
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
        console.log('problem with request:'+e.message);
        callback(null, req);

    });

    backEndReq.end();
};
