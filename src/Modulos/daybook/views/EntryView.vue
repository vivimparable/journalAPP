<template>
<div v-if="entrada">
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span>{{day}}</span> |
            
            <span>{{month}}</span> |
            
            <span> {{yearS}} </span>
            {{id2}}
        </div>

        <div>
            <input v-show="false" ref="selectorImagen" type="file" @change="onSelectImage">
            <button v-if="entrada.id" @click="deleteElement" class="btn btn-danger">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button @click="imagenSeleccionada" class=" btn btn-success">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>

    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">

        <textarea v-model="entrada.text" placeholder="Qué sucedió hoy?" name="" id="" cols="30" rows="10"></textarea>
        <FabButton @newclick="saveEntry" icon="fa-save" />

        <img v-if="entrada.picture && !localImage" class="img-thumbnail" :src="entrada.picture" alt="entry picture">
        <img v-if="localImage" class="img-thumbnail" :src="localImage" alt="entry picture">
    </div>
    </div>
</template>

<script>
import biggestGetterDay from '../helpers/getDatEtc'
import FabButton from '../components/FabBut.vue'
import {mapActions, mapGetters} from 'vuex'
import Swal from 'sweetalert2'
import uploadImage from '../helpers/uploadImage.js'
export default {
    components:{
        FabButton
    },computed:{
        ...mapGetters('journal',['entryfullentryID']),
        day(){
            const { day } = biggestGetterDay(this.entrada.date);
            return day
        },month(){
            const { month } = biggestGetterDay(this.entrada.date);
            return month
        },yearS(){
            const { year } = biggestGetterDay(this.entrada.date);
            return year
        }

    },props:{
        id:{
            requird:true,
            type:String
        }
    },
    data(){
        return{
            
            entrada:null,
            localImage:null,
            file:null
        }
    },methods:{
        ...mapActions('journal',['updateEntry','createEntry','deleteEntry']),
        async saveEntry (){

            new Swal({
                title:"Espere porfavor",
                allowOutsideClick:false
            })
            Swal.showLoading();

           const picture =  await uploadImage(this.file);

            this.entrada.picture = picture;

             if(this.entrada.id){
                await this.updateEntry(this.entrada);
             }else{
                const id = await this.createEntry(this.entrada);
                this.$router.push({name:'entry',params:{id:id}})
             }
             
             this.file=null;
             Swal.fire('guardado','Entrada registrada con exito','success')
                
        },async deleteElement(){

            const result = await Swal.fire({
                title:'¿Estas seguro?',
                text:'Una vez borrado, di adios!!',
                showDenyButton:true,
                confirmButtonText:'Sí, estoy seguro'

            })
            if(result.isConfirmed){
                new Swal({
                    title:'Espere porfa',
                    allowOutsideClick:false
                })
                Swal.showLoading()
           await this.deleteEntry(this.entrada.id)
             this.$router.push({name:'no-entry'}) 
             Swal.fire('Eliminado','','success')}
            

        },
        loadEntry(){
            let entry;
            if(this.id=="new"){
                entry={
                    text:'',
                    date: new Date().getTime()
                }
            }else{
                
                entry =   this.entryfullentryID(this.id)
                if(entry=='undefined') return this.$router.push({name:'no-entry'})
                
        
            }

        this.entrada=entry
        },onSelectImage(event){
           const file = event.target.files[0]

           if(!file){
            this.file=null;
            this.localImage=null;
            return;
           }else{
            this.file=file;
            const fr = new FileReader();
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL(file)

           }
        },imagenSeleccionada(){
            this.$refs.selectorImagen.click()
        }
    },created(){
            this.loadEntry();

        },
    watch:{
            id(){

                this.loadEntry();
                
                
            }
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
