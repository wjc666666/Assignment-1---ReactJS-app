import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieCredits } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const CreditsPage = () => {
  const { id } = useParams();
  const { data: credits, error, isLoading, isError } = useQuery(
    ["credits", { id }],
    getMovieCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {credits.cast.map((member) => (
          <li key={member.cast_id}>
            <strong>{member.name}</strong> as {member.character}
          </li>
        ))}
      </ul>
      <h2>Crew</h2>
      <ul>
        {credits.crew.map((member) => (
          <li key={member.credit_id}>
            <strong>{member.name}</strong> - {member.job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreditsPage;
