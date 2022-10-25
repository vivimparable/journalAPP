<template>
  

  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input type="text"
        class="form-control"
        placeholder="buscar entrada">
    </div>

    <div :key="i" class="entry-scrollarea">
        <entryList  v-for="i in entries" :key="i"/> 
    </div>
   
  </div>
</template>

<script>
import { mapState } from 'vuex';
import entryList from '../components/EntrySpecified.vue'
export default {
components:{
    entryList
},
computed:{
    ...mapState('journal',['entries'])
}
}
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

