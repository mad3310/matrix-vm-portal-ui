/**
 * Created by jiangfei on 2015/8/6.
 */
var memcachedUtility = require('./memcached-utility');

exports.login = function (username, password,callback) {
  memcachedUtility.set(username, {username: username, password: password}, 120);
};

exports.logout = function (username) {
  memcachedUtility.delete(username);
};

exports.authenticate = function (username) {
  memcachedUtility.get(username, function (err, data) {
    if (!err && (new Date(data.exp)) > (new Date())) {
      memcachedUtility.refreshExpireTime(username, 120);
    }
  });
};

// exports.setTokenCookie = function (req,res){
//       console.log(req.cookies);
// };
