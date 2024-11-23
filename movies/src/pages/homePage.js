import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import FilterMoviesCard from '../components/filterMoviesCard'; // Import the filter component

const HomePage = (props) => {
  // Define filter state at the top level of the component
  const [filters, setFilters] = useState({
    name: "",  // Filter by movie title
    genre: "0", // Filter by genre (default is "All")
    actor: "",  // Filter by actor name
  });

  // Fetch movie data using React Query
  const { data, error, isLoading, isError } = useQuery('discover', getMovies);

  // Show a spinner while data is loading
  if (isLoading) {
    return <Spinner />;
  }

  // Handle API errors
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  // Save favorites to localStorage (though redundant, as stated in the original code)
  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  const addToFavorites = (movieId) => true;

  // Update the filter state when the user modifies the filter criteria
  const handleUserInput = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  // Apply filtering to the movie list based on user input
  const filteredMovies = movies.filter((movie) => {
    // Check if the movie title matches the filter
    const matchesTitle = movie.title.toLowerCase().includes(filters.name.toLowerCase());

    // Check if the movie genre matches the filter (genre "0" means "All")
    const matchesGenre =
      filters.genre === "0" || movie.genre_ids.includes(Number(filters.genre));

    // Check if the movie actor matches the filter (assumes `actors` is an array of actor names)
    const matchesActor = filters.actor
      ? movie.actors && movie.actors.some((actor) =>
          actor.toLowerCase().includes(filters.actor.toLowerCase())
        )
      : true;

    // Only include movies that match all filters
    return matchesTitle && matchesGenre && matchesActor;
  });

  return (
    <>
      {/* Render the filter component and pass down filter state and handler */}
      <FilterMoviesCard
        titleFilter={filters.name}
        genreFilter={filters.genre}
        actorFilter={filters.actor}
        onUserInput={handleUserInput}
      />

      {/* Render the movie list with the filtered movie data */}
      <PageTemplate
        title="Discover Movies"
        movies={filteredMovies} // Pass filtered movies to the template
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
    </>
  );
};

export default HomePage;
