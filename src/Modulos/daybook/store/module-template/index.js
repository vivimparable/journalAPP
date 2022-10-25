import state from'./state'
import * as mutations from'./mutations'
import * as actions from'./actions'
import * as getters from'./getters'

const myCustomStore={
namespaced:true,
actions,state,getters,mutations
}

export default myCustomStore;