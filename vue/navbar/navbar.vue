<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <a class="navbar-brand" href="/"
        ><h3><b>Battata</b></h3></a
      >
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link" href="/about/"><h5>About</h5></a>
          </li>
          <li class="nav-item">
            <a href="/vueshop/" class="nav-link"><h5>Vue Shop</h5></a>
          </li>
        </ul>
        <button class="button button5" ><i class="fa fa-shopping-cart fa-2x icon-grey"></i><span>{{getInc}}</span></button>
      </div>
    </nav>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        data() {
            return {
                counter:0,
            };
        },
        computed:{
            ...mapGetters([
                'getInc'
            ])

        }
    };
</script>

<style>
.button {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button5 {border-radius: 50%;}

</style>