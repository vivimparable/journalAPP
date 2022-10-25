<template>
    <navBar/>
        <div class="d-flex">
            <div class="col-4">
                <EntryList/>
            </div>  
            <div class="col">
                <router-view/>
            </div>
        </div>
</template>
<script>
import EntryList from '../components/EntryList.vue'

import navBar from '../components/NavBar.vue'
export default {
    components:{
        navBar,
        EntryList
    }
}
</script>