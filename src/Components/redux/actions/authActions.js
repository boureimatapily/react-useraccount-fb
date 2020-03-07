export const createNewUser = (email,password)=>{

    return (dispatch, getState,{getFirebase})=>{
        let firebase = getFirebase()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((user)=>{
                console.log(user)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}


export const authenticateUser = (email,password, onSuccess)=>{

    return (dispatch, getState,{getFirebase})=>{
        let firebase = getFirebase()
        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then((user)=>{
                console.log(user)
                onSuccess()
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const logoutUser = ()=>{
    console.log("logout")
    return (dispatch, getState,{getFirebase})=>{
        let firebase = getFirebase()
        firebase
            .auth()
            .signOut()
            .then((user)=>{
                console.log(user)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const authenticateWithGoogle = (onSuccess)=>{
    return (dispatch, getState,{getFirebase})=>{
        let firebase = getFirebase()
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
            .auth().signInWithPopup(provider)
            .then((user)=>{
                console.log(user)
                onSuccess()
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}




