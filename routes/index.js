var express = require('express');
var router = express.Router();
var pool = require('../config/dbConfig');

// 메인 페이지 렌더링
router.get('/', function (req, res, next) {
  res.render('index', { page: './sub/main', store: req.session });
});

router.get('/board', function (req, res, next) {
  res.render('index', { page: './sub/board', store: req.session });
});

// 로그인 페이지 렌더링
router.get('/login', function (req, res, next) {
  res.render('index', { page: './sub/auth', store: req.session });
});

//로그인 처리
router.post('/login', function (req, res, next) {

  res.send(req.body)
});

// 로그아웃 처리
router.get('/', function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      throw err;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write('<script>alert("로그아웃되었습니다.");location.href="/"</script>')
  });
});


module.exports = router;
