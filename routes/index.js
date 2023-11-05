var express = require('express');

var router = express.Router();

var uploads = require("../utils/multer").single("Avtar");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


router.post("/uploads", uploads, function (req, res, next) {
  uploads(req, res, function (err) {
    if (err) throw err;
    res.json({ body: req.body, file: req.file })

  })
});
module.exports = router;
