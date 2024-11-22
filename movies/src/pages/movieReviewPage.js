import React,{useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import { getMovieReviews } from "../api/tmdb-api";
const MovieReviewPage = (props) => {
  let location = useLocation();
  const {movie, review} = location.state;
  
  const[allRevies, setAllReviews] = useState([]);
  const[showAll, setShowAll] = useStaste(false);

  useEffect(() => {
  if(showAll){
    const fetchAllReviews = async() =>{
      try{
        const data = await getMovieReviews({ queryKey: ["reviews", { id: movie.id }] });
        setAllReviews(data.results);
      } catch (error) {
        console.error("Failed to fetch all reviews:", error);
      }
    };
    fetchAllReviews();
  }
}, [showAll, movie.id]);
  return (
    <PageTemplate movie={movie}>
      {/*if not click the 'more', then show the single commit*/}
      {!showAll ? (
        <>
      <MovieReview review={review} />
      <button onClick ={() => setAll(true)}>More</button>
      </>
    ) : (
      <>
        <h3>All Reviews</h3>
        <ul>
          {allReviews.map((r) => (
            <li key={r.id}>
              <h4>{r.author}</h4>
              <p>{r.content}</p>
            </li>
          ))}
        </ul>
      </>
    )}
  </PageTemplate>
);
};
export default MovieReviewPage;