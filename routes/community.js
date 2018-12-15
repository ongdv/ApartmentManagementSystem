var express = require('express');
var router = express.Router();

// 공지사항 페이지
router.get('/notice', function(req, res, next) {
  res.render('index', {page: './sub/community/Notice', store: req.session});
});

// 그룹 게시판 페이지
router.get('/group', function(req, res, next) {
  res.render('index', {page: './sub/community/Group', store: req.session});
});

// 자유 게시판 페이지
router.get('/board', function(req, res, next) {
  res.render('index', {page: './sub/community/Board', store: req.session});
});

router.get('/board', function(req, res, next) {
  res.render('index', {page: './sub/board', store: req.session});
});
router.get('/board', function(req, res, next) {
  res.render('index', {page: './sub/board', store: req.session});
});
router.get('/board', function(req, res, next) {
  res.render('index', {page: './sub/board', store: req.session});
});

module.exports = router;
