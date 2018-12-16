var express = require('express');
var router = express.Router();
var pool = require('../config/dbConfig');

// 메인 페이지 렌더링
router.get('/', function (req, res, next) {
  if(!req.session.user){
    res.redirect('/login');
  }
  res.render('index', { page: './sub/main', store: req.session });
  // pool.getConnection(function(err, conn){
  //   conn.release();
  //   var sql = "SELECT * FROM User WHERE UserNo = ? AND userPassword = ?";
  //   conn.query(sql, [req.body.userNo, req.body.userPassword], function(err, result){
  //     if(err){
  //       throw err;
  //     }
  //     if(result.length !== 0){
  //       req.session.user = result[0];
        
  //     }else{
  //       res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  //       res.write('<script>alert("사용자코드, 비밀번호를 확인해주세요.");history.back();</script>')
  //     }
  //   })
  // })
});

// 로그인 페이지 렌더링
router.get('/login', function (req, res, next) {
  if(req.session.user){
    res.redirect('/');
  }
  res.render('auth', { store: req.session });
});

//로그인 처리
router.post('/login', function (req, res, next) {
  console.log(req.body);
  pool.getConnection(function(err, conn){
    conn.release();
    var body = req.body;
    var sql  = "";
    switch (body.userKind) {
      case "client":
        sql = "SELECT * FROM User WHERE UserNo = ? AND userPassword = ?";
        break;
      case "admin":
        sql = "SELECT * FROM User WHERE userKindNo=1 AND UserNo = ? AND userPassword = ?";
        break;
    }
    conn.query(sql, [body.userNo, body.userPassword], function(err, result){
      if(err){
        throw err;
      }
      console.log(result[0]);
      if(result.length !== 0){
        req.session.user = result[0];
        if(body.userKind === "admin"){
          res.redirect('/admin');
          return;
        }
        res.redirect('/');
      }else{
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write('<script>alert("사용자코드, 비밀번호를 확인해주세요.");history.back();</script>')
      }
    })
  })
});

// 로그아웃 처리
router.get('/logout', function (req, res, next) {
  req.session.destroy(function (err) {
    if (err) {
      throw err;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write('<script>alert("로그아웃되었습니다.");location.href="/"</script>')
  });
});


module.exports = router;
