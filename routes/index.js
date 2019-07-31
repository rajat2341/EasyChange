var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'paagi' });
});

router.get('/AboutUs', function(req, res){
  res.render('aboutUs');
});

router.get('/Moments', function(req, res){
  res.render('moments');
});

router.get('/ContactUs', function(req, res){
  res.render('contactUs');
});

router.get('/FoodMenu', function(req, res){
  res.render('foodmenu');
});

module.exports = router;
