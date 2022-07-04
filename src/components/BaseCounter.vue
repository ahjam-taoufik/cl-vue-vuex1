<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>{{ counterInterval }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.getCounter
    },
    counterInterval() {
      return this.$store.getters.getCounterInterval
    },
  },
};
</script>
