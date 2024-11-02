import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <Routes>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});
const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);