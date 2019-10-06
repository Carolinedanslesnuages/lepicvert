import store from '@/store'
import apiPaths from './api-paths'

const checkStatus = async response => {
  if (response.status === 401) {
    await store.dispatch(UNAUTHORIZED)
  }
  return response
}

const checkValidJson = async response => {
  let data
  try {
    data = await response.json()
    return data
  } catch (e) {
    throw new Error('Oups, une petite erreur est survenue.')
  }
}

const apiClient = {
  post: (url, options) => jsonClient(url, { ...options, method: 'post' })
}

export const fetchClient = (url, options) => fetch(url, options).then(checkStatus)
export const jsonClient = (url, options) => fetchClient(url, options).then(checkValidJson)

export default {
  user: {
    async signup (user) {
      console.log({ user })
      const json = await apiClient.post(apiPaths.user.signup, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      return json
    }
  }
}
