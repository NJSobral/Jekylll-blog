<template>
  <div class="wrapper">
    <h1>PDP -> Product detail page {{id}}</h1>
    <div class="container">
      <h2>{{currentMovie.title}}</h2>
      <h3>Categories:</h3>
      <ul class="list squared mx-4 my-1" v-for="category in currentMovie.category" :key="category.id">
        <li class="lis-item">
            <h6> {{category.name}}</h6>
        </li>   
      </ul>
    </div> 
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    id: {
      type: Number,
      required: false,
      default: 1
    }
  },
  methods: {
      ...mapActions(["getAllMovies" ]),
      getData() {
        this.getAllMovies();
        },

    },
  computed: {
      ...mapGetters(["getMovies", "getMovie"]),
      currentMovie(){
  
        return this.getMovie(parseInt(this.id));
      }
  },
  created() {
    this.getData()
  },

}
</script>

<style>

</style>