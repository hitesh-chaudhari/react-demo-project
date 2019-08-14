import { combineReducers } from 'redux';
import user from './userReducer/';
import movie from "./movieReducer/";

export default combineReducers({
  user,
  movie
});
