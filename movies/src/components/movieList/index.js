import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMovie } from "../../api/tmdb-api"; 
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid2";
import Pagination from "@mui/material/Pagination";  

const MovieList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(0);    

  const { data, error, isLoading, isError } = useQuery(
    ["movies", { page: currentPage }],
    getMovie,
    {
      onSuccess: (data) => {
        setTotalPages(data.total_pages); 
      }
    }
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <Grid container spacing={2}>
        {data.results.map((movie) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
            <Movie movie={movie} action={props.action} />
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
        sx={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default MovieList;
