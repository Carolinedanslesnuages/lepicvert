const apiPrefix = `${process.env.BASE_URL || '/'}api/`

const userApiPaths = {
  users: `${apiPrefix}/user/inscription`
}

const apiPaths = {
  user: userApiPaths
}

export default apiPaths
