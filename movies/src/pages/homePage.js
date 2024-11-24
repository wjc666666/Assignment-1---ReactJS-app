import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import Pagination from "../components/Pagination/Pagination";


const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch movies for the current page
  const { data, error, isLoading, isError } = useQuery(
    ["discover", currentPage],
    () => getMovies(currentPage)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results || [];
  const totalPages = data?.total_pages || 1;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => <div>Add to Favorites Button Placeholder</div>}
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
