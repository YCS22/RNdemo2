import { combineReducers } from 'redux';
import { AllPost, GetPostById, GetCommentReducer } from './PostReducer';

export default combineReducers({

    AllPost: AllPost,
    GetPostById: GetPostById,
    getComment: GetCommentReducer


})