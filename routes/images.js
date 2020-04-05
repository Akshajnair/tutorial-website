const router = require('express').Router()
const multer = require('multer')
const path = require('path')
var a = 0
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, 'IMAGE-' + a + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
}).single('myImage')

router.route('/add').post((req, res) => {
  upload(req, res, err => {
    if (err) {
      res.json(err)
    } else {
      res.json('IMAGE-' + a)
      a = a + 1
    }
  })
})
module.exports = router
