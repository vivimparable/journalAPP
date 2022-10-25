<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
    <buttonFab/>
  </div>


</template>

<script>
import buttonFab from '../components/FabBut.vue'
export default {
components:{
  buttonFab
}
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>