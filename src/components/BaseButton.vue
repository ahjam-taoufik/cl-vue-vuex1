<template>

    <button @click="increment">add 3</button>

</template>

<script>
export default {
   methods:{
    increment(){
        this.$store.commit('incrementNmb',3)
    }
   }

};
</script>

<style scoped></style>
