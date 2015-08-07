var Memcached = require('memcached');
var memcached = new Memcached('10.200.91.144:21211');

exports.set = function (key, value, lifetime) {
  memcached.set(key, value, lifetime, function (err) {
    /* stuff */
  });
};

exports.get = function (key, callback) {
  memcached.get(key, function (err, data) {
    callback(err, data);
  });
};

exports.refreshExpireTime = function (key, lifetime) {
  memcached.touch(key, lifetime, function (err) {
    /* stuff */
  });
};

exports.delete = function (key, callback) {
  memcached.del(key, function (err) { /* stuff */
  });
};
