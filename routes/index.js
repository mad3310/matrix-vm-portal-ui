var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/mcluster', function (req, res, next) {
  res.render('mcluster/index', {title: 'Express'});
});

module.exports = router;
