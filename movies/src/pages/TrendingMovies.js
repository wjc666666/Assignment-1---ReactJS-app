import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../api/tmdb-api';
import MovieCard from '../components/movieCard';

const TrendingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [timeWindow, setTimeWindow] = useState('day'); //it's default trending

    useEffect(() => {
        const getTrendingMovies = async() =>{
            const movieData = await fetchTrendingMovies(timeWindow);
            setMovies(movieData);
        };
        getTrendingMovies();
    }, [timeWindow]);

    return (
        <div>
          <h2>Trending Movies</h2>
          <div>
            {/* switch to day/week trending */}
            <button onClick={() => setTimeWindow('day')} disabled={timeWindow === 'day'}>
              Daily
            </button>
            <button onClick={() => setTimeWindow('week')} disabled={timeWindow === 'week'}>
              Weekly
            </button>
          </div>
          <div className="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      );
};

export default TrendingMovies;