import Vuex from 'vuex'
import cart from './modules/navbarstore'
import products from './modules/shopstore'

// Create a new store instance.
// const store = createStore({
//     state() {
//         return {
//       count: 0
//     }
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     },
//     actions:{
//       inc({commit}) {
//           commit('increment')
//       } 
//     },
//     getters: {
//         getInc:  state => { return state.count}
//     }
//   })


export default new Vuex.Store({
  modules: {
    navbarstore,
    shopstore
  }
});
  