var express = require('express');
var router = express.Router();

// 메인 페이지 렌더링
router.get('/userVote', function(req, res, next) {
  res.render('index', {page: './sub/vote/UserVote', store: req.session});
});

router.get('/groupVote', function(req, res, next) {
  res.render('index', {page: './sub/vote/GroupVote', store: req.session});
});

module.exports = router;
