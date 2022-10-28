 export const entrybyid= (state ) => (termino)=>{
    if(termino==0){
        return state.entries
    }

    return state.entries.filter(entry=> entry.text.toLowerCase().includes(termino.toLowerCase()))
 }

 export const entryfullentryID= (state ) => (id)=>{
    

    return state.entries.find(a=> a.id===id)
 }