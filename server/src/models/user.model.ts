import _PasswordService from '@services/misc/password.service'
import isEmail from 'validator/lib/isEmail'
import { model, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      maxlength: 30,
      minlength: 4,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
      validate: [isEmail],
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre('save', async function (next) {
  await _PasswordService.crypte(this)
  next()
})

export default model('user', userSchema)
