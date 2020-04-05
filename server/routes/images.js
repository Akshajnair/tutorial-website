const router = require('express').Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname))
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
      res.json(req.body)
    }
  })
})
module.exports = router
