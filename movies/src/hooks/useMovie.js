import { useEffect, useState } from "react";
import { getMovies } from "../api/tmdb-api";

const useMovies = (page = 1) => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovies(page); 
        setMovies(data.results); 
        setTotalPages(data.total_pages); 
      } catch (err) {
        setError(err.message || "Failed to fetch movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return { movies, totalPages, loading, error };
};

export default useMovies;
