var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
}); 

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: "Home"});
});


/* GET aboutt page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: "About"});
});

/* GET products page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: "Project"});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: "Services"});
});

 
/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "Contact"});
});

module.exports = router;
