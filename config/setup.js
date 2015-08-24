'use strict';

module.exports = {
    backEndServerName : 'localhost',
    backEndServerPort : '8080',
    userInfoPath:'/user/info',
    //页面白名单请求
    whileList : [
        '/dashboard',
        '/list/*',
        '/view/mcluster/monitor'
    ],
    //数据接口白名单
    whileApiList : [
        /^(?!(\/list|\/view)).*?$/ //不以view、list开头的接口
    ]
};
