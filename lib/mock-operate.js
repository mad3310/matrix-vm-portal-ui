/**
 * Created by jiangfei on 2015/7/22.
 */
var fs = require('fs');

var exports = function () {
};

var VM_LIST_PATH = './data/vm-list.txt',
  HCLUSTER_LIST_PATH = './data/hcluster-list.json';

exports.prototype.createVm = function (vm) {
  var vmJson = JSON.stringify(vm) + ';'
  fs.open(VM_LIST_PATH, 'a', 0644, function (e, fd) {
    if (e) throw e;
    fs.write(fd, vmJson, function (e) {
      if (e) throw e;
      fs.closeSync(fd);
    })
  });
};
exports.prototype.getVmList = function () {
  var fileStr = fs.readFileSync(VM_LIST_PATH, {encoding: 'utf8'});
  var vmList = fileStr.split(';').filter(function (data) {
    return data != '';
  }).map(function (data) {
    return JSON.parse(data);
  });
  return vmList;
};

exports.prototype.getHclusterList = function () {
  var fileData = fs.readFileSync(HCLUSTER_LIST_PATH, {encoding: 'utf8'});
  return JSON.parse(fileData);
};
module.exports = exports;
