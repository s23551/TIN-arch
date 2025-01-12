var express = require('express');
var router = express.Router();

router.get('/hello', function(req, res){
   res.send("Hello World!");
});

router.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

module.exports = router;
