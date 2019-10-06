import express from 'express'
import { signUp } from './user.controllers'

const router = express.Router()

app.post('/user', signUp)

export default router