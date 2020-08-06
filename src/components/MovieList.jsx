import React from 'react';

const MovieList = props => {
    //const {movies} = props;
    //const {handleCheckboxEvent} = props;

    return (
        <>
          {
              
                 <div  className="moviesContainer">
                  <input type='checkbox' onChange={(event) => props.handleCheckboxEvent(event, props.movie)}/>
                  <div>
                    <p className='title'>{props.movie.Title}</p>
                    <p className='year'>{props.movie.Year}</p>
                    <img src={props.movie.Poster} alt="Movie Poster"/>
                  </div>
                </div>
              
          }
        </>
    )
}

export default MovieList;