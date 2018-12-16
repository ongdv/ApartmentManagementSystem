var express = require('express');
var router = express.Router();
var pool = require('../config/dbConfig');

// 시설 보기 페이지 렌더링
router.get('/', function(req, res, next) {
  res.render('index', {page: './sub/facility/Facility', store: req.session});
});

// 시설 예약 관리 페이지 렌더링
router.get('/reserve', function(req, res, next) {
  res.render('index', {page: './sub/facility/Reserve', store: req.session});
});

// 시설 만족도 평가 페이지 렌더링
router.get('/rating', function(req, res, next) {
  res.render('index', {page: './sub/facility/problem', store: req.session});
});

// 시설 하자 접수 관리 페이지 렌더링
router.get('/problem', function(req, res, next) {
  res.render('index', {page: './sub/facility/problem', store: req.session});
});

module.exports = router;
