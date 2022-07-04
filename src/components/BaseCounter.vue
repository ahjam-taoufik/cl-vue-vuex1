<template>
  <div>
    <h2>{{ counter }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>
