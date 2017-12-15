// import Vue from 'vue'

export default {
  loadUser ({ commit, state }) {
    return new Promise((resolve, reject) => {
      this._vm.$axios.get('/app/mock/1657/GET//user/123').then((res) => {
        commit('setUser', { user: res.data })
        resolve()
      })
    })
  }
}
