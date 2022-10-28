<template>
    <div>
        <button class="btn btn-primary"
        @click="saveClick">
            <i :class="`fa fa-2x ${icon}`"></i>
        </button>
        <h4>{{colins}}</h4>
    </div>
</template>
<script>

export default {
    props:{
        icon:{
            default:'fa-plus'
        }
        
    },methods:{
        saveClick(){
            this.$emit('newclick')
        
        }
            
    }
}
</script>

<style lang="scss" scoped>

    button{
    height: 80px;
    width: 80px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 100%;
    }
</style>