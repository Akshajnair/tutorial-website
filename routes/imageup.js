const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const tinify = require('tinify')
var aws = require('aws-sdk')
var multerS3 = require('multer-s3')

tinify.key = 'xhDlyYcvStBdzR4z2knGpmN1SX6Kb8XW'
// secretAccessKey: process.env.ATLAS_URI

let Token = require('../models/token.model')
let Account = require('../models/account.model')

aws.config.update({
  secretAccessKey: 'vzVSilAfgmTVSpfS0qFemKX1M0lS/bvl7kshqS5C',
  accessKeyId: 'AKIAIQ4UB3YPDELJODDQ',
  region: 'us-east-1'
})

var accountid = ''
var fname = ''
// const baseurl = './public/uploads/'
const s3 = new aws.S3()

// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function (req, file, cb) {
//     cb(null, accountid + path.extname(file.originalname))
//     fname = accountid + path.extname(file.originalname)
//   }
// })

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'aiskilllabsimages',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, 'userimg/' + accountid + '.jpg')
    }
  })
}).single('myImage')

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5242880 }
// }).single('myImage')

router.route('/add/:tokenid').post((req, res) => {
  Token.findById(req.params.tokenid).then(token => {
    const a = new Date(token.createdAt),
      b = new Date()
    const date =
      a.getFullYear() * 100000 +
      (a.getMonth() + 1) * 10000 +
      a.getDate() * 100 +
      a.getHours()
    const datenow =
      b.getFullYear() * 100000 +
      (b.getMonth() + 1) * 10000 +
      b.getDate() * 100 +
      b.getHours()
    if (token.expired == false && date + 200 > datenow) {
      accountid = token.accountid
      upload(req, res, function (err) {
        if (err) {
          res.status(422).send({
            errors: [{ title: 'File Upload Error', detail: err.message }]
          })
        }
        Account.findById(token.accountid)
          .then(accounts => {
            accounts.dplink = true
            accounts.save().catch(err => res.json('invalid'))
            res.json({ imageUrl: req.file.location })
          })
          .catch(err => res.json('invalid'))
        res.json(accountid)
      })

      // upload(req, res, err => {
      //   if (err) {
      //     res.json(err)
      //   } else {

      //     Account.findById(token.accountid)
      //       .then(accounts => {
      //         accounts.dplink = true
      //         accounts.save().catch(err => res.json('invalid'))
      //       })
      //       .catch(err => res.json('invalid'))
      //     res.json(accountid)
      //   }
      // })
    }
  })
})
module.exports = router
