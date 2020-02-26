import CatReducer from './reducers/CatReducer';
import {createStore} from 'redux';




const reduxstore  = createStore(
    CatReducer
    );

export default reduxstore