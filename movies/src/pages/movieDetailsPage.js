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
            {/* Display actors with links to actor details */}
            <div style={{ marginTop: "20px" }}>
              <h3>Actors:</h3>
              <ul>
                {movie.cast?.map((actor) => (
                  <li key={actor.id}>
                    <Link to={`/actor/${actor.id}`} style={{ color: "blue", textDecoration: "underline" }}>
                      {actor.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* added buttons for recommendations and credits */}
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
              <Link to={`/movie/${movie.id}/recommendations`} style={{ textDecoration: "none" }}>
                <button style={{ backgroundColor: "#007BFF", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer" }}>
                  View Recommendations
                </button>
              </Link>
              <Link to={`/movie/${movie.id}/credits`} style={{ textDecoration: "none" }}>
                <button style={{ backgroundColor: "#007BFF", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer" }}>
                  View Credits
                </button>
              </Link>
            </div>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details...</p>
      )}
    </>
  );
};

export default MoviePage;
