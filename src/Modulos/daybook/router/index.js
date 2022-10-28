


export default {
    name:'daybook',
    component:()=> import('../layout/DayBookLayout.vue'),
    children:[
        {
            path:'',
            name:'no-entry',
            component:()=> import('../views/NoEntrySelected.vue'),


        },
        {
            path:':id',
            name:'entry',
            component:()=> import('../views/EntryView.vue'),
            props:(route)=>{
                return{
                    id:route.params.id
                }
            }

        }
    ]
}