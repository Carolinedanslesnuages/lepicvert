import mongoose from 'mongoose'


const { Schema } = mongoose 

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true, 
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  email : {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  emailValidationHash: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  passwordResetRequestedAt: {
    type: Date,
    default: undefined,
  },
  isDeleted: {
      type: Boolean,
      default: false,
    },
    signUpDate: {
      type: Date,
      default: Date.now(),
    },
    status: {
      type: String,
      default: 'Admin',
    },
  })

  
  
  export default mongoose.model('User', userSchema)