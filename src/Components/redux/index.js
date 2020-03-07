import firebase from '../Config'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore} from 'redux-firestore'
import CatReducer from './reducers/CatReducer';
import {createStore,combineReducers ,applyMiddleware, compose} from 'redux';
import { getFirebase, reduxReactFirebase,firebaseReducer  } from 'react-redux-firebase';



 let combReducers = combineReducers({
    user:CatReducer,
    firebase:firebaseReducer,
})

let reduxstore  = createStore(
    combReducers,
     compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
    reduxFirestore(firebase),
    reduxReactFirebase(firebase)
     )

    );

export default reduxstore