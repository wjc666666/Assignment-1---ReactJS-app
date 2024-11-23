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
        <>
          <h1>{actor.name}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            style={{ width: "200px", borderRadius: "10px" }}
          />
          <p>{actor.biography || "No biography available."}</p>
          <h3>Movies:</h3>
          {actor.movie_credits?.cast?.length > 0 ? (
            <ul>
              {actor.movie_credits.cast.map((movie) => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No movies available for this actor.</p>
          )}
        </>
      ) : (
        <p>Waiting for actor details...</p>
      )}
    </div>
  );
};

export default ActorPage;
