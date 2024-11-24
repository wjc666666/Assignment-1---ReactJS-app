import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import FilterMoviesCard from "../components/filterMoviesCard";
import { searchMoviesByActorOrTitle } from "../api/tmdb-api";
import Pagination from "../components/Pagination/Pagination"; // Assuming you have Pagination component

const HomePage = () => {
  const [filters, setFilters] = useState({ query: "", genre: "0" });
  const [searchResults, setSearchResults] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch movies with pagination
  const { data, error, isLoading, isError } = useQuery(
    ["discover", currentPage, filters], 
    () => getMovies(currentPage) // Fetch movies for the current page
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results || [];
  const totalPages = data?.total_pages || 1;

  // Handle user input for filters
  const handleUserInput = (type, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [type]: value }));
  };

  // Handle search functionality
  const handleSearch = async (query) => {
    try {
      const movies = await searchMoviesByActorOrTitle(query);
      setSearchResults(movies);
      setIsSearch(true);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  // Filter movies based on query and genre
  const filteredMovies = movies.filter((movie) => {
    const keywords = filters.query?.toLowerCase().split(" ") || [];
    const matchesTitle = keywords.every((kw) =>
      (movie.title || "").toLowerCase().includes(kw)
    );
    const matchesGenre =
      filters.genre === "0" || movie.genre_ids?.includes(Number(filters.genre));
    return matchesTitle && matchesGenre;
  });

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default HomePage;
