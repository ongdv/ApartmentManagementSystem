var express = require('express');
var router = express.Router();

// 전체 관리비 페이지 렌더링
router.get('/totalMgt', function(req, res, next) {
  res.render('index', {page: './sub/mgt/TotalMgt', store: req.session});
});

// 예산 관리 페이지 렌더링
router.get('/budget', function(req, res, next) {
  res.render('index', {page: './sub/mgt/Budget', store: req.session});
});

// 지출 관리 페이지 렌더링
router.get('/payment', function(req, res, next) {
  res.render('index', {page: './sub/mgt/Payment', store: req.session});
});

module.exports = router;
