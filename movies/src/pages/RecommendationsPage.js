import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieRecommendations } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const RecommendationsPage = () => {
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["recommendations", { id }],
    getMovieRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const recommendations = data.results;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recommendations</h1>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((movie) => (
            <li key={movie.id} style={{ marginBottom: "20px" }}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsPage;
