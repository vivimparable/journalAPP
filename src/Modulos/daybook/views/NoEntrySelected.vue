<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
    <buttonFab @newclick="PostNewEntry"/>
  </div>


</template>

<script>
import buttonFab from '../components/FabBut.vue'
export default {
components:{
  buttonFab
},methods:{
  PostNewEntry(){
    this.$router.push({name:'entry',params:{id:'new'}})
  }
}
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>