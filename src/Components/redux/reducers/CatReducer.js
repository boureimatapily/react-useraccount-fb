let initialState = {
    
    accounts:[],
    loading: true
}


export default (state = initialState, action)=>{
    switch(action.type){
        case "ADD_ACCOUNT":
            console.log('add')
            return [...state, action.payload]

        case "DELETE_ACCOUNT":
             return state.filter((account)=>{
                 return account.id!==action.payload
             })
        case "EDIT_ACCOUNT":
            return state.map(account=>{
                if(account.id===action.payload.id)
                    return action.payload;
                return account;

            })
        case "UPDATE_ALL_ACCOUNTS":
                return {accounts:action.payload, loading: false}
            
        default:
            return state;
    }
}