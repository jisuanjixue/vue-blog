
export default {
  loadUser ({ commit, state }) {
    return new Promise((resolve, reject) => {
      // 用this._vm调用axios,不能用this,因为是在store的全局域里
      this._vm.$axios.get('/app/mock/1657/GET//user/123').then((res) => {
        commit('setUser', { user: res.data })
        // 这里的引用了promise 的函数方法,resolve()要用在它本身里
        resolve()
      })
    })
  }
}
