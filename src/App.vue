<template>
  <base-container >
     <base-auth-user></base-auth-user>
  </base-container>
  
  <base-container title="Vuex" v-if="isAuth">
    <base-counter></base-counter>
    <button @click="inc">increase by mapAction +</button>
    <button @click="increase">increase +</button>
    <button @click="decrease">decrease -</button>
    <button @click="incrementByAction">increment By Action +</button>
    <button @click="incrementNumberByAction">
      increment Number By Action +
    </button>
    <base-button :mode="'increment'">add +</base-button>
    <base-button :mode="'decrement'">Min -</base-button>
  </base-container>

</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue';
import BaseButton from './components/BaseButton.vue';
import BaseAuthUser from './components/BaseAuthUser.vue'
import {mapActions}from 'vuex'
export default {
  components: {
    BaseContainer,
    BaseCounter,
    BaseButton,
    BaseAuthUser
  },
  computed:{
      isAuth(){
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
     
    //  ...mapActions(['increment']),
     ...mapActions({ inc:'increment'}),

    increase() {
      this.$store.commit('increment');
    },
    decrease() {
      this.$store.commit('decrease');
    },
    incrementByAction() {
      this.$store.dispatch('increment');
    },
    incrementNumberByAction() {
      // this.$store.dispatch('incrementByNumber',4)
      this.$store.dispatch('incrementByNumber',{value:4})
      // this.$store.dispatch({
      //   type: 'incrementByNumber',
      //   val: 5,
      // });
    },
  },
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
