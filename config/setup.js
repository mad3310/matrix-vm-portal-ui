'use strict';

module.exports = {
    backEndServerName : 'localhost',
//    backEndServerName : '10.200.91.144',
    backEndServerPort : '8080',
//    backEndServerPort : '30003',
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
    ],
    mockWhileList: [
        '/billing/subscription',
        '/billing/order'
    ]
};
