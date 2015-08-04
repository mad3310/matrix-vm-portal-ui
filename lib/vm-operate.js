/**
 * Created by jiangfei on 2015/7/22.
 */
var fs = require('fs');

var exports = function () {
};

var filename = './data/vm-list.txt';
exports.prototype.createVm = function (vm) {
    var vmJson = JSON.stringify(vm) + ';'
    fs.open(filename, 'a', 0644, function (e, fd) {
        if (e) throw e;
        fs.write(fd, vmJson, function (e) {
            if (e) throw e;
            fs.closeSync(fd);
        })
    });
};
exports.prototype.getVmList = function () {
    var fileStr = fs.readFileSync(filename, {encoding: 'utf8'});
    var vmList = fileStr.split(';').filter(function (data) {
        return data != '';
    }).map(function (data) {
        return JSON.parse(data);
    });
    return vmList;
};
module.exports = exports;
