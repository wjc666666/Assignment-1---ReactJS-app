import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api/tmdb-api';
import MovieCard from '../components/movieCard';

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const getPopularMovies = async () =>{
            const movieData = await fetchPopularMovies();
            setMovies(movieData);
        };
        getPopularMovies();
    },[]);
    return(
    <div>
        <h2>Popular Movies</h2>
        <div className='movie-list'>
            {movies.map((movies) =>(
                <MovieCard key={movies.id} movie={movie} />
            ))}
        </div>
    </div>
    );
};

export default PopularMovies;