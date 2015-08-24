var getServerData = require('../lib/request-server');
var config = require('../config/setup.js');

var options = {
    hostname:config.backEndServerName,
    port:config.backEndServerPort,
    path:'',
    method:'GET',
    headers:{}
};

exports.getUserInfo = function (){
    options.path = config.userInfoPath;
    return function(req, res, next){
        getServerData.getData(options, req, res, callback);
        function callback(data, req){
            if(data){
                req.extraData.userInfo = data.user;
                next();
            }else{
                next();
            }
        };
    };
};
