/**
 * Created by jiangfei on 2015/7/22.
 */
var express = require('express');
var router = express.Router();
var vmOperate = require('../lib/vm-operate');
var operate= new vmOperate();

/* GET home page. */
router.post('/vm/create', function(req, res, next) {
    operate.createVm(req.body);
    res.status(200).end();
});
router.get('/vm/list', function(req, res, next) {
    var data= operate.getVmList();
    res.status(200).send(data);
});

module.exports = router;