var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        dropboxToken: process.env.DROPBOX_TOKEN
                      });
});

module.exports = router;
