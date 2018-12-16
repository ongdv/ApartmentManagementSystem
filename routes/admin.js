var express = require('express');
var router = express.Router();
var pool = require('../config/dbConfig');

// 관리자 메인 페이지 렌더링
router.get('/', function(req, res, next) {
  if(!req.session.user){
    res.redirect('/login');
  }
  res.render('admin', {page: './sub/main', store: req.session });
});

module.exports = router;
