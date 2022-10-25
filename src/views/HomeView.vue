<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>

  <button @click="goMainPage" class="btn btn-primary">click</button>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods:{
    goMainPage(){
      this.$router.push({name:'no-entry'})
    }
  }
};
</script>

<style scoped>

</style>
