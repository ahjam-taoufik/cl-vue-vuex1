<template>
  <base-container title="Vuex">
    <base-counter></base-counter>
    <button @click="increase">Add</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue';

export default {
  components: {
    BaseContainer,
    BaseCounter,
  },
  methods:{
    increase(){
      this.$store.state.counter++
    }
  }
};
</script>
 
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
