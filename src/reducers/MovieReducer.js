import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
  ADD_TO_MYLIST,
  ADD_TO_WATCHED_LIST,
  REMOVE_FROM_MY_LIST
} from '../constants/MovieConstants';

export const movieListReducer = (state = { movies: [], myList: [] }, action) => {
  debugger
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { ...state, loading: true };
    case MOVIE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.payload.Search]
        
      };
    case MOVIE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case ADD_TO_MYLIST:
      let newList = new Set(state.myList.map(movie => movie.imdbID));
      var mergedList = [...state.myList, ...action.payload.filter(d => !newList.has(d.imdbID))];
      return {...state, myList: mergedList}

    case ADD_TO_WATCHED_LIST : 
      let newWatchedList = new Set(state.myList.map(movie => movie.imdbID));
      let merged = [...state.myList, ...action.payload.filter(d => !newWatchedList.has(d.imdbID))];
      let mergedWatchedList = merged.map(itm => {
        itm.watched = true;
        return itm;
      });
      return {...state, myList: mergedWatchedList}

      case REMOVE_FROM_MY_LIST:
        let resultedList = action.payload.filter(x => {
          return !state.myList.find(y=>{
            return x.imdbID === y.imdbID
          })
        })
          return {...state, myList : resultedList};

    default:
      return state;
  }
};
