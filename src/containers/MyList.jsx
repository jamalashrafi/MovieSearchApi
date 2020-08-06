import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MovieList from '../components/MovieList';
import { removeFromMyList, addToWatchedMyList } from '../actions/movieActions';

export const MyList = props => {
     const [myListArray, setMyListArray] = useState([]);
     const myMovieList = useSelector(state => state.movieList);
     const { myList } = myMovieList;
     const dispatch = useDispatch();

     const handleCheckboxEvent = (event, movie) => {
        if(event.target.checked === true ){
           
            setMyListArray(prevList => {
                return [...prevList, movie]
              })         
          } else {
            setMyListArray(prevList => {
              return [...prevList.filter(movieItm => movieItm.imdbID !== movie.imdbID)]
            })
          }
     }

     return(
         <>
          <div className='inputSection'>
            <button onClick={() => dispatch(removeFromMyList(myListArray))}>Remove from my list</button>
            <button onClick={()=> addToWatchedMyList()}>Add to my Watched List</button> 
          </div>
            {
                myList.map((movie, index) => {
                    return  <MovieList  key={index} movie={movie} handleCheckboxEvent={handleCheckboxEvent} />
                })
            }
            
         </>
     )

}