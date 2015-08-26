/**
 * log4js 日志输出配置文件
 * @type {exports}
 */
var log4js = require('log4js');

log4js.configure({
    appenders: [
        { type: 'console' }, {
            type: 'dateFile',
            filename: '/var/log/matrix_log/normal.log',
            pattern: "_yyyy-MM-dd",
            maxLogSize: 1024,
            alwaysIncludePattern: false,
            backups: 4,
            category: 'logger'
        }
    ],
    replaceConsole: true
});

module.exports = function(){
    var log = log4js.getLogger('logger');
    return log4js.connectLogger(log,{level:log4js.levels.INFO});
};
