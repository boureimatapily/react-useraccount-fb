import firebase from '../Config'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import { reduxFirestore, getFirestore} from 'redux-firestore'
import CatReducer from './reducers/CatReducer';
import { firebaseReducer } from 'react-redux-firebase'
import {createStore,combineReducers ,applyMiddleware, compose} from 'redux';


let combReducers = combineReducers{
    user:CatReducer,
    firebase:firebaseReducer,
}

let reduxstore  = createStore(
    combReducers,
     compose(
    applyMiddleware(thunk.withExtraArgument(getFirestore)),
    reduxFirestore(firebase),
     )

    );

export default reduxstore