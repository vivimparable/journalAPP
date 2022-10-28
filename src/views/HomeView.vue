<template>

  <div  class="home text-center">
  
  <h6 class="bg-success p-2 text-white">App por Xavier Garcia Urruchi</h6>

    <img alt="Vue logo" src="../assets/logo.png" />
    <h4>Bienvenido a tu própio diario. Aquí podrás comentar lo que te vaya ocurriendo en tu día a día junto a una foto que caracterize ese día. </h4>
  
    <button @click="goMainPage" class="btn btn-primary">Clicka para entrar!</button>
  </div>

  

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

div  {
  margin: auto;
  width: 70%;
  height: 100vh;
   background-color: rgb(157, 255, 160);
   border-left: solid 0.1px rgb(48, 130, 32);
    border-right: solid 0.1px rgb(48, 130, 32);
}
</style>
