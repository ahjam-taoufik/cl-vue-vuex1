<template>
  <div>
    <h2>with mapper :{{ getCounter }}</h2>
    <h2>with mapper :{{ count }}</h2>
    <h2>{{ counter }}</h2>
    <h2>{{ counterInterval }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getCounter']),  
    ...mapGetters({ count: 'getCounter', }),//you can named your gettter
    counter() {
      return this.$store.getters.getCounter;
    },
    counterInterval() {
      return this.$store.getters.getCounterInterval;
    },
  },
};
</script>
