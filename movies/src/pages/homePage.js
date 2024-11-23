import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import { searchMoviesByActor } from "../api/tmdb-api"; // 导入搜索演员的API
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import FilterMoviesCard from '../components/filterMoviesCard';

const HomePage = () => {
  // State to manage filters
  const [filters, setFilters] = useState({
    name: "",  // Filter by movie title
    genre: "0", // Filter by genre
    actor: "",  // Filter by actor name
  });

  const [actorMovies, setActorMovies] = useState([]); // Store movies found by actor search
  const [isActorSearch, setIsActorSearch] = useState(false); // Check if actor search is in progress

  // Fetch movie data using React Query
  const { data, error, isLoading, isError } = useQuery('discover', getMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  // Handle actor search
  const handleActorSearch = async (actorName) => {
    try {
      if (actorName) {
        const actorMovies = await searchMoviesByActor(actorName); // Call the API
        setActorMovies(actorMovies); // Update the actor movies list
        setIsActorSearch(true); // Indicate that actor search is active
      } else {
        setActorMovies([]); // Clear actor movies if actor name is empty
        setIsActorSearch(false); // Reset actor search flag
      }
    } catch (error) {
      console.error('Error during actor search:', error);
    }
  };

  // Update filters when user modifies the input
  const handleUserInput = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  // Apply filters to movie data
  const filteredMovies = (isActorSearch ? actorMovies : movies).filter((movie) => {
    // Filter by movie title
    const matchesTitle = movie.title.toLowerCase().includes(filters.name.toLowerCase());

    // Filter by genre
    const matchesGenre = filters.genre === "0" || movie.genre_ids.includes(Number(filters.genre));

    // Filter by actor (if applicable)
    const matchesActor = filters.actor
      ? movie.actors && movie.actors.some((actor) =>
          actor.toLowerCase().includes(filters.actor.toLowerCase())
        )
      : true;

    return matchesTitle && matchesGenre && matchesActor;
  });

  return (
    <>
      <FilterMoviesCard
        titleFilter={filters.name}
        genreFilter={filters.genre}
        actorFilter={filters.actor}
        onUserInput={handleUserInput}
        onActorSearch={handleActorSearch} // Pass actor search handler to child
      />

      <PageTemplate
        title="Discover Movies"
        movies={filteredMovies} // Pass filtered movies
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
    </>
  );
};

export default HomePage;
