<template>
  <div  class="entry-container  pointer p-2"  @click="$router.push({name:'entry',params:{id:i.id}})" >
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">{{day}}</span>
        <span class="mx-1 fs-5">{{month}}</span>
        <span class="mx-2 fw-light">{{year}}</span>
    </div>

    <div class="entry-description">
      {{shortText}}
    </div>
  </div>
</template>

<script>

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
export default {
props:{
   i:Array
},computed:{
  shortText(){
    if(this.i.text.length>100){
      return this.i.text.substring(0,100)+ "...";
    }else{
        return this.i.text

    }
  },day(){
    const date = new Date(this.i.date);
    return date.getDate()
  },
    month(){
    const date = new Date(this.i.date);
    return months[date.getMonth()]
  },
    year(){
    const date = new Date(this.i.date);
    return `${date.getFullYear()}, ${days[date.getDay()]}`
  }
}
}

</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount:45) ;
  }

  .entry-description{
    font-size:12px;
  }
}
</style>