import journalApi from '@/api/api'

export const APIFirebase=async({commit}) =>{

    const res = await journalApi.get('/entries.json');
    console.log(res.data)
if(!res){
    commit('saveEntries',[])
}
    const dataEntera = res.data
    const entradas3= []
    //Para añadir un elemento nuevo a un array//
                //Debo iterar dentro del propio bucle, sino no funcuona//
    for(let id of Object.keys(dataEntera)){
        entradas3.push({
            id,
            ...dataEntera[id]
        })
    }


    commit('saveEntries',entradas3)
}


export const updateEntry = async ({commit},entrada)=>{
const newEntrada ={text:entrada.text, date:entrada.date,picture:entrada.picture}

const axiometro = await journalApi.put(`/entries/${entrada.id}.json`,newEntrada)
console.log(axiometro)
commit('updatedInfo',{...entrada})



}

export const createEntry = async ({commit},entrada) =>{

    //newEntrada
const {date,picture,text,id}=entrada;
const newEntry = {date,picture,text,id}
const {data} = await journalApi.post(`/entries.json`,newEntry)
console.log(data)
newEntry.id=data.name;

commit('addentry', newEntry)
return data.name

}

export const deleteEntry = async ({commit},id) =>{

    //newEntrada 
    await journalApi.delete(`/entries/${id}.json`)

    commit('deleteEntryMut',id)

}