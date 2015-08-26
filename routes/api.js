/**
 * Created by jiangfei on 2015/7/22.
 */
var express = require('express');
var router = express.Router();

var mockOperate = require('../lib/mock-operate');
var auth = require('../lib/auth');
var operate = new mockOperate();


router.post('/login', function (req, res, next) {
  var loginInfo = req.body;
  //TODO 应该调取java接口返回JSESSIONID
  auth.login(loginInfo.username, loginInfo.password);
  res.cookie('JSESSIONID', '1', { maxAge: 900000, httpOnly: true });
});

router.post('/vm/create', function (req, res, next) {
  operate.createVm(req.body);
  res.status(200).end();
});
router.get('/vm/list', function (req, res, next) {
  var data = operate.getVmList();
  res.status(200).send(data);
});

router.get('/hcluster/list', function (req, res, next) {
  var data = operate.getHclusterList();
  res.status(200).send(data);
});

module.exports = router;
