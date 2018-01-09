var express = require('express');
var router = express.Router();

/* GET 메서드용 인덱스 페이지 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '헬로 월드!?' });
});

/* GET 메서드용 로그인 페이지 */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' , massage : req.flash('loginMessage') });
});

/* GET 메서드용 가입 페이지 */
router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Signup Page' , massage : req.flash('signupMessage') });
});

/* GET 메서드용 프로필 페이지 */
router.get('/profile', function(req, res, next) {
  res.render('profile', { 
    title : 'Profile Page' , 
    user : req.user,
    avatar : gravatar.url(req.user.email , {s : '100', r : 'x', d: 'retro'}, true)
  });
});


module.exports = router;


