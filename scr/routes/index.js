var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  const db = req.app.get("db");

  db.query('SELECT * FROM usuarios', function(err, results) {
    if (err) {
      return next(err);
    }
    res.render('index', { usuarios: results });
  });
});

module.exports = router;
