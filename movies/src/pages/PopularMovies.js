import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api/tmdb-api';
import MovieCard from '../components/movieCard';

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const getPopularMovies = async () =>{
            try{
            const movieData = await fetchPopularMovies();
            if (Array.isArray(movieData)) {  
                setMovies(movieData);
            } else {
                setError('Failed to fetch movies.');
            }
        } catch (err) {
            setError('Failed to fetch movies: ' + err.message);  // Handle error if API fails
        }
    };
    getPopularMovies();
}, []);
if (error) {
    return <div>Error: {error}</div>;
}
    return(
    <div>
        <h2>Popular Movies</h2>
        <div className='movie-list'>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No movies available.</p>  // Display message if no movies are available
                )}
            </div>
        </div>
    );
};

export default PopularMovies;