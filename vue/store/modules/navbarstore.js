
const state = () =>{
        toggle: false
}

const mutations = {
    showbasket(state) {
        if (state.toggle === false) {
            state.toggle = true
        } else {
            state.toggle = false
        }
    }
}

const actions = {
    active({ commit }) {
        commit('showbasket')
    }
}

const getters = {
    getToggle: state => { return state.count }
}

export default {
    state,
    getters,
    actions,
    mutations
}