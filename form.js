var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log("TEST");
	res.render('./static/index.html');
	//res.render({'index': './index.html'});
});


module.exports = router;
