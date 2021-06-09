// Create a new store instance.

const state = () => ({
      count: 0,
      item: [],
      checkoutstatus: null
})

const mutations = {
      increment (state) {
        state.count++
      }
    }

const actions = {
      inc({commit}) {
          commit('increment')
      } 
    }

const getters = {
        getInc:  state => { return state.count }
    }

export default {
    state,
    getters,
    actions,
    mutations
    }

  