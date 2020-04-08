const router = require('express').Router()
const tinify = require('tinify')

const secretAccessKey = process.env.AWSSECRETKEY
const accessKeyId = process.env.AWSACCESSKEYID
tinify.key = process.env.TINIFYKEY

router.route('/:id').post((req, res) => {
  const source = tinify.fromUrl(
    'https://aiskilllabsimages.s3.us-east-2.amazonaws.com/userimg/' +
      req.params.id +
      '.jpg'
  )
  const resized = source.resize({
    method: 'cover',
    width: 300,
    height: 300
  })
  resized
    .store({
      service: 's3',
      aws_access_key_id: accessKeyId,
      aws_secret_access_key: secretAccessKey,
      region: 'us-east-1',
      path: 'aiskilllabsimages/userimg/' + req.params.id + '.jpg'
    })
    res.json('done')
})
module.exports = router
