<template>
  <button @click="action">
    <slot />
  </button>
</template>

<script>
export default {
  props: ['mode'],
  methods: {
    action() {
      if (this.mode === 'increment') {
        this.$store.commit('incrementNmb');
      } else if (this.mode === 'decrement') {
        this.$store.commit('decrementNmb');
      }
    },
  },
};
</script>

<style scoped></style>
