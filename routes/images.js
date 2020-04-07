const router = require('express').Router()
const multer = require('multer')
const path = require('path')
const tinify = require('tinify')

tinify.key = 'xhDlyYcvStBdzR4z2knGpmN1SX6Kb8XW'
let Token = require('../models/token.model')
let Account = require('../models/account.model')
var accountid = ''
var fname = ''
const baseurl = './public/uploads/'

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(null, accountid + path.extname(file.originalname))
    fname = accountid + path.extname(file.originalname)
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 5242880 }
}).single('myImage')

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
      upload(req, res, err => {
        if (err) {
          res.json(err)
        } else {
          const source = tinify.fromFile(baseurl + fname)
          const resized = source.resize({
            method: 'cover',
            width: 350,
            height: 350
          })
          source.store({
            service: 's3',
            aws_access_key_id: 'AKIAIQ4UB3YPDELJODDQ',
            aws_secret_access_key: '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',
            region: 'us-east-1',
            path: 'aiskilllabsimages/userimg/'+accountid+'.jpg'
          })
          Account.findById(token.accountid)
            .then(accounts => {
              accounts.dplink = true
              accounts.save().catch(err => res.json('invalid'))
            })
            .catch(err => res.json('invalid'))
          res.json(accountid)
        }
      })
    }
  })
})
module.exports = router
