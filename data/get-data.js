var getServerData = require('../lib/request-server');
var config = require('../config/setup.js');

var options = {
    hostname:config.BACK_END_SERVER_NAME,
    port:config.BACK_END_SERVER_PORT,
    path:'',
    method:'get',
    headers:{}
};

// exports.getUserInfo = function (){
//     return function(req, res, next){
//         getServerData.getData('/user', req, callback);
//     };
//     function callback(data, req){
//         console.log(data);
//     }
// };
exports.getMclusterList = function (){
    options.path = '/mcluster/list';
    return function(req, res, next){
        getServerData.getData(options, req, res, callback);
        function callback(data, req){
            if(data){
                req.extraData.mclusterList = data;
                next();
            }else{

            }
        };
    };
};
