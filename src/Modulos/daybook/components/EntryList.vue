<template>
  

  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input type="text"
        class="form-control"
        placeholder="buscar entrada" v-model="term">
    </div>
    <div class="mt-2 d-flex flex-column">
        <button @click="$router.push({name:'entry',params:{id:'new'}})" class="btn btn-primary mx-3">
            Nueva Entrada
            <i class="fa fa-plus-cirlcle"></i>
        </button>
    </div>
    <div :key="i" class="entry-scrollarea">
        <entryList  v-for="i in getAll" :key="i.id" :i="i" /> 
    </div>
   
  </div>
</template>

<script>
import { mapGetters    } from 'vuex';
import entryList from '../components/EntrySpecified.vue'
export default {
components:{
    entryList
},
computed:{
    ...mapGetters('journal',['entrybyid']),
    getAll(){
        return this.entrybyid(this.term)
    }
},data(){
    return{
        term:""
    }
}}
</script>

<style lang="scss" scoped>
input{
    height: 35px;
}
.entry-list-container{
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);

}
.entry-scrollarea{
    height: calc(100vh - 110px);
    overflow: scroll;
}
</style>

