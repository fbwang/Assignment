var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dashboard', function(req, res, next) {
    res.render('dashboard');
});
router.get('/piecharts', function(req, res, next) {
    res.render('PieChart');
});

module.exports = router;
