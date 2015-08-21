var getServerData = require('../lib/request-server');
var config = require('../config/setup.js');

var options = {
    hostname:config.BACK_END_SERVER_NAME,
    port:config.BACK_END_SERVER_PORT,
    path:'',
    method:'GET',
    headers:{}
};

exports.getUserInfo = function (){
    options.path = config.USER_INFO_PATH;
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
