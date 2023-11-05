var express = require('express');

var router = express.Router();

// we call the multer file and use single middlewere file
var uploads = require("../utils/multer").single("Avtar");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


// uploading page 
router.post("/uploads", function (req, res, next) {
  // upload is midddleware
  uploads(req, res, function (err) {
    if (err) throw err;
    res.json({ body: req.body, file: req.file })

  })
});
module.exports = router;
