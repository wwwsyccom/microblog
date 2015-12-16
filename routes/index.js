var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("lastPage="+req.session.lastPage);
	var lastPage = req.session.lastPage;
	req.session.lastPage = 'lastPage index';
  res.render('index', { title: lastPage });
});

module.exports = router;
