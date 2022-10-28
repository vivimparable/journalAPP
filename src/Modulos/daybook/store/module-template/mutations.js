
 export const saveEntries=(state,playload)=>{
   state.entries=[...state.entries,...playload]
   state.isLoading=false}
   
  export const updatedInfo=(state,playload)=>{
   const indice= state.entries.map(e=> e.id).indexOf(playload.id)
   console.log(indice)
   state.entries[indice]=playload
 }

 
 
  
 export const addentry=(state,playload)=>{

  state.entries=[playload,...state.entries]
 }

   
 export const deleteEntryMut=(state,playload)=>{

  state.entries= state.entries.filter( e => e.id != playload)
 }