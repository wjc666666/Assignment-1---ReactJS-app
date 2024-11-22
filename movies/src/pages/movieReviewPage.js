import React,{useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import { getMovieReviews } from "../api/tmdb-api";
const MovieReviewPage = (props) => {
  let location = useLocation();
  const {movie, review} = location.state;
  
  const[allReviews, setAllReviews] = useState([]);
  const[showAll, setShowAll] = useState(false);

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
      <button 
       style={{
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick ={() => setShowAll(true)}>More</button>
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