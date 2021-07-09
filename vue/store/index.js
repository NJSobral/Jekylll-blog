import { createStore } from 'vuex'
import navbarstore from './modules/navbarstore'
import shopstore from './modules/shopstore'

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


const store = createStore({
  modules: {
    navbarstore,
    shopstore
  }
});

export default store;