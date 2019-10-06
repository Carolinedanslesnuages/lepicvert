import User from './user.model'
import uuidv4 from 'uuid/v4'

export const findUserById = async id => {
  const user = await User.findById(id)
  return user
}

export const findUserByEmail = async (email, populatePassword) => {
  const query = User.findOne({ email })

  if (populatePassword) {
    return query.select('+password').exec()
  }
  return query.exec()
}

export const findUserByCredentials = async (email, password) => {
  const user = await findUserByEmail(email, true)
  if(!user) {
    undefined
  }
  const isValidCredentials = user.comparePassword(password)
  if(!isValidCredentials) {
    return null
  }
  return user
}

export const createUser = async (firstName, LastName, email, password, status) => {
  const user = new User ({ firstName, LastName, email, password, status})
  await user.save()
  return user
}

export const deleteUserByEmail = async email => {
  const user = await findUserByEmail(email)
  if(!user) {
    throw new error('No user found')
  }
  await user.delete()
  return user
}

export const deleteUser = async user => {
  if(!user) {
    throw new error('No user found')
  }
  await user.delete()
  return user
}

export const updateUserEmail = async (user,email) => {
  if(!user) {
    throw new Error('user is undefined')
  }
  await user.updateOne({email})
  const updatedUser = await User.findById(user.id)
  return updatedUser
}

export const updateUserPassword = async (user, password) => {
  const now = Date.now()
  const passwordResetRequestedAt = user.passwordResetRequestedAt
  const difference = now - passwordResetRequestedAt
  const fifteenMinutes = 15 * 60 * 1000
  if (difference > fifteenMinutes) {
    const error = new Error(
      'Votre lien a expiré, veuillez refaire votre demande de réinitialisation de mot de passe'
    )
    error.status = 401
    throw error
  }
  user.password = password
  await user.save()
  return user
}

export const updateUserStatus = async (user, status) => {
  if (!user) {
    throw new Error('user is undefined')
  }
  await user.update({ status })
  const updatedUser = await User.findById(user._id)
  return updatedUser
}

export const addEmailValidationHash = async email => {
  const emailValidationHash = uuidv4()
  const user = await findUserByEmail(email)
  user.emailValidationHash = emailValidationHash
  user.passwordResetRequestedAt = new Date()
  await user.save()
  return emailValidationHash
}