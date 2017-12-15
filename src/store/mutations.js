export default {
  setUser (state, payload) {
    state.user = payload.user
  },
  updateArticles (state, payload) {
    state.articles = payload.articles
  },
  updateLoadingStatus (state, payload) {
    state.isLoading = payload.isLoading
  }
}
