const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';
const initialState = require('./initialState');
import { createStore } from 'redux';



function reducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: 
    //console.log(Object.assign({}, state, {albums: action.albums}))
        return Object.assign({}, state, {albums: action.albums});
    default: 
        return state;
  }
}

const store = createStore(reducer);


export default store;