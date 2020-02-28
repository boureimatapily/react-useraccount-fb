import firebase from '../Config'
import thunk from 'redux-thunk'
import { reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import { reduxFirestore, getFirestore} from 'redux-firestore'
import CatReducer from './reducers/CatReducer';
import {createStore,combineReducers ,applyMiddleware, compose} from 'redux';


let reduxstore  = createStore(
    CatReducer,
     compose(
    applyMiddleware(thunk.withExtraArgument(getFirestore)),
    reduxFirestore(firebase),
     )

    );

export default reduxstore