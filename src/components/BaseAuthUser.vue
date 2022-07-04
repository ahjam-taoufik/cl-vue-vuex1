<template>
  <button v-if="!isAuth" @click="login"  >Login</button>
  <button v-if="isAuth" @click="logout">Logout</button>
</template>

<script>
export default {

   computed:{
    isAuth(){
      return this.$store.getters.isAuthenticated
    }
   },
   methods:{
    login(){
      this.$store.dispatch('login')
    },
    logout(){
      this.$store.dispatch('logout')
    },
   }

};
</script>

<style scoped>

</style>
