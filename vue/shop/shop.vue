<template>
  <div>
    <h1>Shop</h1>
    <button type="button" @click="increment2">Increment</button>    
    <h3 style="color:black;">Counter is: {{getInc}}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
  export default {
    data() {
      return {
        count: 0 ,
      };
    },
    methods:{
      ...mapActions([
        'inc',
      ]),
      increment2() {
        this.inc()
        console.log(this.$store.state.count)
      }
    },
    computed:{
      ...mapGetters([
        'getInc',
      ])
    }
  };
</script>

<style>

</style>