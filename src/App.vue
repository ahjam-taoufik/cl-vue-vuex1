<template>
  <base-container title="Vuex">
    <base-counter></base-counter>
    <button   @click="increase">increase +</button>
    <button  @click="decrease">decrease -</button>
    <base-button :mode="'increment'">add +</base-button>
    <base-button :mode="'decrement'">Min -</base-button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue';
import BaseButton from './components/BaseButton.vue';
export default {
  components: {
    BaseContainer,
    BaseCounter,
    BaseButton
  },
  methods:{
    increase(){
      this.$store.commit('increment')
    },
    decrease(){
      this.$store.commit('decrease')
    },
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
