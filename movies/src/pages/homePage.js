import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import FilterMoviesCard from "../components/filterMoviesCard";
import { searchMoviesByActorOrTitle } from "../api/tmdb-api";

const HomePage = () => {
  const [filters, setFilters] = useState({ query: "", genre: "0" });
  const [searchResults, setSearchResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const { data, error, isLoading, isError } = useQuery("discover", getMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results || [];

  const addToFavorites = (movieId) => true;

  const handleUserInput = (type, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [type]: value }));
  };

  const handleSearch = async (query) => {
    try {
      const movies = await searchMoviesByActorOrTitle(query);
      setSearchResults(movies);
      setIsSearch(true);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const filteredMovies = movies.filter((movie) => {
    const keywords = filters.query?.toLowerCase().split(" ") || [];
    const matchesTitle = keywords.every((kw) =>
      (movie.title || "").toLowerCase().includes(kw)
    );
    const matchesGenre =
      filters.genre === "0" || movie.genre_ids?.includes(Number(filters.genre));
    return matchesTitle && matchesGenre;
  });

  return (
    <>
      <FilterMoviesCard
        queryFilter={filters.query}
        genreFilter={filters.genre}
        onUserInput={handleUserInput}
        onSearch={handleSearch}
      />
      <PageTemplate
        title="Discover Movies"
        movies={isSearch ? searchResults : filteredMovies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
    </>
  );
};

export default HomePage;
