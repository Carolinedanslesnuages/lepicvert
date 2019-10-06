import api from '@/api'

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'

export default {
  state: {
    isSendingSigup: false
  },

  mutations: {

    [SIGNUP_REQUEST] (state) {
      state.isSendingSignup = true
    },
    [SIGNUP_SUCCESS] (state) {
      state.isSendingSignup = false
    },
    [SIGNUP_FAILURE] (state) {
      state.isSendingSignup = false
    }
  },

  actions: {

    async SIGNUP_REQUEST ({ commit, dispatch }, user) {
      console.log('test in store')
      commit(SIGNUP_REQUEST)
      try {
        const response = await api.user.signup(user)
        if (response.success === false) {
          throw new Error(response.message)
        }
        commit(SIGNUP_SUCCESS, response)
        return response
      } catch (error) {
        commit(SIGNUP_FAILURE)
        dispatch(SHOW_ERROR, error.message)
        throw error
      }
    }
  }
}
