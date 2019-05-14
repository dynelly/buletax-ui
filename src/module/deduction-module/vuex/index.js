export default {
  namespaced: true,
  state: {
    activeIndex: 'first'
  },
  mutations: {
    updateActiveIndex (sate, activeIndex) {
      sate.activeIndex = activeIndex
    }
  },
  actions: {
    action1 () {
      return 'good'
    }
  }
}
