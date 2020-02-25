let initalState = [
    {userName:"Joseph",
    email:"yorobo@arafat.mort", 
    password: "Bank", 
     id: "4444"
    },
    {userName:"Joseph",
    email:"yorobo@arafat.mort", 
    password: "Bank", 
     id: "4444"
    }   
]

export default function(state = initalState, action){
    switch(action.type){
        case "ADD_ACCOUNT":
            return [...state, action.payload];
        case "DELETE_ACCOUNT":
            let accounts = state.filter(item=>{
                return item.id!==action.payload
            })
            return accounts;

        case "UPDATE_ACCOUNT":
            let newAccounts = state.map(item=>{
                if(item.id===action.payload.id){
                    return action.payload;
                }else{
                    return item;
                }
            });
            return newAccounts;
        default:
            return state;
    }
}