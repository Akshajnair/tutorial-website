const router = require('express').Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
}).single('myImage')

// Check File Type
function checkFileType (file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // Check mime
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return cb(null, true)
  } else {
    cb('Error: Images Only!')
  }
}
router.route('/add').post((req, res) => {
  upload(req, res, err => {
    if (err) {
      res.json(err)
    } else {
      if (req.body.image == undefined) {
        res.json(req.body.image)
        console.log("no file selected"+req.body.image)
      } else {
        res.json(req.body.image)
        console.log(req.body.image)
      }
    }
  })
})
module.exports = router
