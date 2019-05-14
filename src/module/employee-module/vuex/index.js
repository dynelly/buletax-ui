import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    name: 'nameState',
    country: [],
    activeIndex: 'first'
  },
  mutations: {
    updateCountry (sate, country) {
      sate.country = country
    },
    updateActiveIndex (sate, activeIndex) {
      sate.activeIndex = activeIndex
    }
  },
  actions: {
    action1 () {
      return 'good'
    },
    loadCountry ({ commit }) {
      return Vue.http.get('/country').then(({ data }) => {
        commit('updateCountry', data)
        return data
      })
    }
  }
}
