import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { listMovies, addToMyList, addToWatchedMyList } from '../actions/movieActions';
import MovieList from '../components/MovieList';
const yearArray = [2000, 2001, 2002,2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 
  2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

const HomeScreen = (props) => {
  
  const [year, setYear] = useState(2000);
  const [myList, setMyList] = useState([]);
  const movieList = useSelector((state) => state.movieList);
  const { movies, loading, error } = movieList;
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMovies(year));
  }, [year]);

  const handleCheckboxEvent = (event, movie) => {
      if(event.target.checked === true ){
        let findMovieIndex = myList.findIndex(itm => itm.imdbID === movie.imdbID);
        if(findMovieIndex > -1){
            setMyList(prevList => {
              return [...prevList.map(item => {
                if(item.imdbID === movie.imdbID){
                   item.watched = true
                }
                return item
              })]
            })
        }else{
          setMyList(prevList => {
            return [...prevList, {...movie, watched: false}]
          })
        }
        
      } else {
        setMyList(prevList => {
          return [...prevList.filter(movieItm => movieItm.imdbID !== movie.imdbID)]
        })
      }

  }

  const addToMyListFn = () => {
    if(myList.length < 1){
      alert('Select atleast one movie');
      return;
    }else
      dispatch(addToMyList(myList))
  }

  const addToWatchedList = () => {
    dispatch(addToWatchedMyList(myList));
  }
 
  return (
    <>
      <div className='inputSection'>
      <select onChange={(event)=> setYear(event.target.value)}>
          {yearArray.map((x,i)=> <option value={x} key={i}>{x}</option>)}
      </select>
      <button onClick={()=> addToMyListFn()}>Add to my List</button>
      <button onClick={()=> addToWatchedList()}>Add to my Watched List</button>
      <Link to='/myList'>Add to my list</Link>
      </div>
      <div >
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          movies.map((movie, index) => {
            return <MovieList movie={movie} key={index} handleCheckboxEvent={handleCheckboxEvent}/>
          })
        )}
      </div>
    </>
  );
};

export default HomeScreen;
