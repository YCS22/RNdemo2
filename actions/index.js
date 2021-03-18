import {
    GET_ALL_POST,
    GET_POST_BY_ID,
    GET_COMMENT
} from './types';
import data from '../api/data';


//GET ALL POSTS
export const getAllPost = () => async dispatch => {
    dispatch({ type: "Loading" })
    const response = await data.get('/posts');
    dispatch({ type: GET_ALL_POST, payload: response.data })
}


//GET POST BY ID
export const getPostById = (id) => async dispatch => {
    const response = await data.get(`/posts/${id}`);
    dispatch({ type: GET_POST_BY_ID, payload: response.data })
}



//GET comment by ID
export const getCommentByPostId = (id) => async dispatch => {
    const response = await data.get(`/posts/${id}/comments`);
    dispatch({ type: GET_COMMENT, payload: response.data })
}

