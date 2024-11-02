import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../api/tmdb-api';
import MovieCard from '../components/movieCard';

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchUpcomingMovies();
      setMovies(movieData);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h2>Upcoming Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;