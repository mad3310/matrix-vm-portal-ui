var Memcached = require('memcached');
var memcached = new Memcached('10.200.91.144:21211');

memcached.set('foo', 'bar', 10, function (err) { /* stuff */ });
memcached.get('foo', function (err, data) {
  console.log(data);
});
