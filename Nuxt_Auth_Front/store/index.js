export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    console.log('state', state)
    return state.auth.user || {}
  }
};
