import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getActorDetails } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const ActorPage = () => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActorDetails
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {actor ? (
        <div>
          <h2>{actor.name}</h2>
          <p>{actor.biography}</p>
          <h3>Movies:</h3>
          <ul>
            {actor.movies?.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`} style={{ color: "blue", textDecoration: "underline" }}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Waiting for actor details...</p>
      )}
    </div>
  );
};

export default ActorPage;
