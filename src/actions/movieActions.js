import axios from 'axios';
import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  ADD_TO_MYLIST,
  ADD_TO_WATCHED_LIST,
  REMOVE_FROM_MY_LIST
} from '../constants/MovieConstants';

export const listMovies = (year) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST });
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=32395055&type=movie&s=bad&y=${parseInt(year)}`
    );
    dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_LIST_FAIL, payload: error });
  }
};

export const addToMyList = myList => dispatch => {
  dispatch({type : ADD_TO_MYLIST, payload: myList});
}

export const addToWatchedMyList = myWatchedList => dispatch => {
  dispatch({type : ADD_TO_WATCHED_LIST, payload : myWatchedList});
}

export const removeFromMyList = myListToRemove => dispatch => {
  dispatch({type: REMOVE_FROM_MY_LIST, payload: myListToRemove})
}