import { createAction, handleActions } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const GET_POST ='post/GET_POST';

// action creators
export const getPost = createAction(GET_POST, api.getPost);

// initial state
const initialState = Map({
    post: Map({})
});

// reducer
export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            console.log("====== post/GET_POST_SUCCESS ======")
            console.log("action : ", action)

            const post = action.payload.data[0];
            let newState;
            post === undefined ? newState = state : newState = state.set('post', fromJS(post));
            return newState;
        }
    })
}, initialState)