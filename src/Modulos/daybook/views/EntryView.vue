<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span>10</span> |
            
            <span>Julio</span> |
            
            <span> 2022, jueves</span>
        </div>

        <div>
            <button class="btn btn-danger">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class=" btn btn-success">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">

        <textarea placeholder="Qué sucedió hoy?" name="" id="" cols="30" rows="10"></textarea>
        <FabButton icon="fa-save" />

        <img class="img-thumbnail" src="https://i.pinimg.com/originals/65/65/54/65655487c2e9c6f6bd9a546a00f29187.jpg" alt="entry picture">
    </div>
</template>

<script>
import FabButton from '../components/FabBut.vue'

export default {
    components:{
        FabButton
    }
}
</script>

<style lang="scss" scoped>

textarea{
    border:none;
    font-size: 20px;
    height: 100%;

    &:focus{
        outline: none;
    }

    
}

img{
    position: fixed;
    width: 200px;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgb($color:#0000, $alpha:0.2);
}
</style>
