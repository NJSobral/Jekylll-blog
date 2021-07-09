<template>
  <div>
    <h1>PLP -> Product listing page {{ category }}</h1>
    <div class="container" style="margin-left: 150px">
      <ul
        class="nav justify-content-center my-5"
        style="display: inline-block"
        v-for="category in getCategories"
        :key="category.id"
      >
        <router-link
          :to="{ name: 'category', params: { category: category.name } }"
        >
          <li class="nav-item mx-3">
            {{ category.name }}
          </li>
        </router-link>
      </ul>
    </div>
    <div class="grid-container">
      <div class="card" v-for="movie in visiblemovies" :key="movie.id">
        <div class="card-header"></div>
        <div class="card-content">
          <router-link :to="{ name: 'movie', params: { id: movie.id } }">
            <h4>{{ movie.title }}</h4>
          </router-link>
        </div>
        <h5>Categories:</h5>
        <ul
          class="list squared mx-4 my-1"
          v-for="category in movie.category"
          :key="category.id"
        >
          <li class="lis-item">
            <h6>{{ category.name }}</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    category:{
      type: String,
      required: false,
      default: 'All'
    }
  },
  methods: {
    ...mapActions([
      "getAllMovies",
      "getAllCategories",
    ]),
    getData() {
      this.getAllMovies();
      this.getAllCategories();
    },
  },
  computed: {
    ...mapGetters(["getMovies", "getMoviesbyCategory", "getCategories"]),
    visiblemovies(){
      if (this.category === "All"){
        return this.getMovies;
      }

      return this.getMoviesbyCategory(this.category);
    }
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>