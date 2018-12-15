var express = require('express');
var router = express.Router();

// 세대 관리 보기 페이지
router.get('/userInfo', function (req, res, next) {
  res.render('index', { page: './sub/mypage/UserInfo', store: req.session });
});

// 세대원 관리 보기 페이지
router.get('/userMember', function (req, res, next) {
  res.render('index', { page: './sub/mypage/UserMember', store: req.session });
});

// 차량 관리 보기 페이지
router.get('/behcle', function (req, res, next) {
  res.render('index', { page: './sub/mypage/Vehcle', store: req.session });
});

// 방문 차량 관리 보기 페이지
router.get('/visit', function (req, res, next) {
  res.render('index', { page: './sub/mypage/Visit', store: req.session });
});

// 나의 관리비 보기 페이지
router.get('/myMgt', function (req, res, next) {
  res.render('index', { page: './sub/mypage/MyMgt', store: req.session });
});
router.get('/', function (req, res, next) {
  res.render('index', { page: './sub/main', store: req.session });
});
router.get('/', function (req, res, next) {
  res.render('index', { page: './sub/main', store: req.session });
});




module.exports = router;
