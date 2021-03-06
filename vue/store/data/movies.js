const _movies = [
  { 'id': 1, 'title': 'Pirates of the Caribbean','category': [{ 'id': 1, 'name': 'Fantasy'}], 'price': 10.01, 'inventory': 2 },
  { 'id': 2, 'title': 'Harry Potter', 'category': [{ 'id': 1, 'name': 'Fantasy'}], 'price':  10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Lord of the Rings', 'category': [{ 'id': 1, 'name': 'Fantasy'}], 'price': 19.99, 'inventory': 5 }
  { 'id': 4, 'title': 'Star Wars', 'category':[{ 'id': 1,'name':'Sci-fi'}], 'price': 19.99, 'inventory': 5 }
  { 'id': 5, 'title': 'Alien vs Predator', 'category': [{ 'id': 1,'name':'Sci-fi'}], 'price': 19.99, 'inventory': 5 }
  { 'id': 6, 'title': 'Wolf of wall street', 'category': [{'id': 1, 'name': 'Drama'},{'id': 1, 'name': 'Crime'}], 'price': 19.99, 'inventory': 5 }
  { 'id': 7, 'title': 'Batman Begins', 'category': [{ 'id': 1,'name': 'Super-hero'}], 'price': 19.99, 'inventory': 5 }
  { 'id': 8, 'title': 'Avengers: End Game', 'category': [{ 'id': 1,'name': 'Super-hero'}], 'price': 19.99, 'inventory': 5 }
  { 'id': 9, 'title': 'Figth Club', 'category': [{'id': 1, 'name': 'Drama'},{'id': 1, 'name': 'Crime'}], 'price': 19.99, 'inventory': 5 }
  { 'id': 10, 'title': 'Shutter Island', 'category': [{ 'id': 1, 'name': 'Drama'}], 'price': 19.99, 'inventory': 5 }
]

const _categories = [
  { 'id': 0, 'name': 'All' }
  { 'id': 1, 'name': 'Fantasy' },
  { 'id': 2, 'name': 'Sci-fi' },
  { 'id': 3, 'name': 'Drama' },
  { 'id': 4, 'name': 'Crime' }
  { 'id': 5, 'name': 'Super-hero'}
]S

export default {
  getMovies (cb) {
    setTimeout(() => cb(_movies), 100)
  },
  getCategories (cb) {
    setTimeout(() => cb(_categories), 100)
  },

  buyMovies (movies, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.webdriver)
        ? cb()
        : errorCb()
    }, 100)
  }
}