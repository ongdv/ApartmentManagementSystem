var express = require('express');
var router = express.Router();

// 메인 페이지 렌더링
router.get('/', function(req, res, next) {
  res.render('index', {page: './sub/main', store: req.session});
});

router.get('/board', function(req, res, next) {
  res.render('index', {page: './sub/board', store: req.session});
});

module.exports = router;
