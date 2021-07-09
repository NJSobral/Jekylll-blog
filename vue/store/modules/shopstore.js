import movies from '../data/movies'

const state = () => ({
  count: 0,
  movie: {},
  movies: [],
  moviesbycategory: [],
  categories: [],
  checkoutstatus: null
})

const mutations = {
  increment(state) {
    state.count++
  },
  setMovies(state, movies) {
    state.movies = movies
  },
  setMovie(state, movie) {
    state.movie = movie
  },
  setMoviesbyCategory(state, movies) {
    state.movies = movies
  },
  setCategories(state, categories) {
    state.categories = categories
  }
}

const actions = {
  inc({ commit }) {
    commit('increment')
  },
  getAllMovies({ commit }) {
    movies.getMovies(movies => {
      localStorage.setItem('movies', JSON.stringify(movies))
      commit('setMovies', movies)
    })

  },
  getAllCategories({ commit }) {
    movies.getCategories(categories => {
      localStorage.setItem('categories', JSON.stringify(categories))
      commit('setCategories', categories)
    })
  }
}

const getters = {
  getInc: state => { return state.count },
  getMovies: state => { return state.movies },
  getCategories: state => { return state.categories },
  getMoviesbyCategory: (state) => (category) => { 
    return state.movies.filter(element => 
    { 
      var result = false
      element.category.forEach(item => {
        if(item.name === category)
          result = true
      });
      return result
    });
  },
  getMovie: (state) => (id) => { 
    return  state.movies.find(element => element.id === id)
  } 
}
export default {
  state,
  getters,
  actions,
  mutations
}

