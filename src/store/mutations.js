export default {
  setUser (state, payload) {
    state.user = payload.user
  },
  updateLoadingStatus (state, payload) {
    state.isLoading = payload.isLoading
  }
}
