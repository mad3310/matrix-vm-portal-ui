var express = require('express');
var router = express.Router();

var getData = require('../data/get-data');

/* GET home page. */
router.get('/list/mcluster', getData.getUserInfo(), function (req, res, next) {
    if(req.extraData && req.extraData.userInfo){
        res.render('index', {title: 'Express', username:req.extraData.userInfo.userName});
    }else{
        res.redirect('https://login.lecloud.com/index?redirect_uri=http://localhost:3000/oauth/callback;');
        // res.render('index', {title: 'Express'});
    }
});

router.get('/login', function (req, res, next) {
  res.render('login', {title: 'Express'});
});

module.exports = router;
