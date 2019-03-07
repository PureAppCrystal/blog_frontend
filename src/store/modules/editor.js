import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'lib/api';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';
const GET_POST = 'editor/GET_POST';
const EDIT_POST = 'editor/EDIT_POST';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writePost = createAction(WRITE_POST, api.writePost);
export const getPost = createAction(GET_POST, api.getPost);
export const editPost = createAction(EDIT_POST, api.editPost);

// initial state
const initialState = Map({
    title: '',
    markdown: '',
    tags: '',
    postId: 0
});

// reducer
export default handleActions({
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    },
    ...pender({
        type: WRITE_POST,
        onSuccess: (state, action) => {
          console.log("====== editor/WRITE_POST_SUCCESS ======'")
          // 내가 보내주는 데이터 구조가 다르기 때문
          const { insertId }   = action.payload.data.resultData;
          return state.set('postId', insertId);
        }
    }),
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            console.log("====== editor/GET_POST_SUCCESS ======'")
            const { title, tags, content } = action.payload.data[0];
            //console.log("action : ", action);
            return state.set('title', title)
                .set("markdown", content)
                .set("tags", tags);
        }
    })
    
}, initialState)