export function addNewAccount(account){
    return {
        type:"ADD_ACCOUNT",
        payload:account
    }
}

export function removeAccount(id){
    return {
        type:"DELETE_ACCOUNT",
        payload:id
    }
}

export function updateAccountInfo(account){
    return {
        type:"UPDATE_ACCOUNT",
        payload:account
    }
}   