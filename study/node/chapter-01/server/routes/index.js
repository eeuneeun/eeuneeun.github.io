var express = require('express');
var router = express.Router();

/* GET 메서드용 인덱스 페이지 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '헬로 월드!?' });
});

module.exports = router;
