const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    role: {
      type: String,
      required: true,
      trim: true
    },
    dplink: {
      type: String,
      trim: true
    },
    coverlink: {
      type: String,
      trim: true
    },
    course: [
      {
        courseid: { type: String, trim: true },
        lastvideoid: { type: String, trim: true },
        recent: { type: String, trim: true }
      }
    ],
    profession: {
      type: String,
      required: false,
      trim: true,
      minlength: 3
    },
    description: {
      type: String,
      required: false,
      trim: true,
      minlength: 10
    },
    language: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      required: false,
      trim: true,
      minlength: 3
    },
    twitter: {
      type: String,
      required: false,
      trim: true,
      minlength: 3
    },
    facebook: {
      type: String,
      required: false,
      trim: true,
      minlength: 3
    },
    linkedin: {
      type: String,
      required: false,
      trim: true,
      minlength: 3
    },
    youtube: {
      type: String,
      required: false,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
)

const Account = mongoose.model('Account', accountSchema)
module.exports = Account
