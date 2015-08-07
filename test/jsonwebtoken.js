/**
 * Created by jiangfei on 2015/8/6.
 */

// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var token = jwt.sign({foo: 'bar'}, 'shhhhh',{expiresInSeconds:100});
console.log('encode:' + token + '\n');

var decoded = jwt.decode(token);
console.log('decode:' + JSON.stringify(decoded));