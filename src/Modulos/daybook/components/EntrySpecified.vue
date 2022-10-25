<template>
  <div  class="entry-container  pointer p-2"  @click="$router.push({name:'entry',params:{id:9}})" >
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">10</span>
        <span class="mx-1 fs-5">12</span>
        <span class="mx-2 fw-light">1996</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, deserunt voluptas. Quidem sint itaque, illo ab quam, laborum ducimus at dolorem debitis veniam quibusdam exercitationem consequatur provident non vero voluptatibus labore amet necessitatibus? Placeat alias dignissimos debitis fuga iusto provident.
    </div>
  </div>
</template>

<script>
export default {

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