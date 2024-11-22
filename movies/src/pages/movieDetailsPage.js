import React from "react";
import { useParams, Link } from "react-router-dom"; 
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const MoviePage = () => {
  const { id } = useParams(); 
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            {/* added the linked recommendations movies*/}
            <div style={{ marginTop: "20px" }}>
              <Link to={`/movie/${movie.id}/recommendations`} style={{ textDecoration: "none", color: "white" }}>
                <button
                  style={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  View Recommendations
                </button>
              </Link>
            </div>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
