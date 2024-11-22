# Assassin 1 - ReactJS app.

Name: Juncheng Wang

## Overview.

This repository contains the TMDB Client, a dynamic ReactJS application that allows users to explore various movies, view details, and manage their favorites and upcoming movies. It interacts with the TMDB API to fetch and display movie data,, providing an engaging user experience with dynamic routing and interactive features.


### Features.
 

+ Trending Movies: A dynamic route (/trending) that displays the most popular or trending movies.
+ Popular Movies: A new dynamic route (/popular) that lists the most popular movies worldwide, updated weekly.
+ Show More Reviews: On the movie review page, users can click "More" to view all reviews for a movie.
+ Movie Details: Detailed information for a specific movie is available on /movies/:id
+ Movie Recommendations: A new feature that displays recommended movies based on the currently selected movie at /movies/:id/recommendations.
+ Movie Credits: Displays the cast and crew of a specific movie at /movies/:id/credits.
## Setup requirements.

1.Clone the repository:
git clone https://github.com/wjc666666/Assignment-1---ReactJS-app.git
2.Install the dependencies:
npm install
3.Set up environment variables:
Create a .env file and add your TMDB API key like this:
REACT_APP_TMDB_API_KEY=your_api_key
4.Run the app:
npm start
The app will be available on http://localhost:3000.
## API endpoints.

Below is a list of the TMDB endpoints used in this application:

+ Discover list of movies - GET /discover/movie
+ Movie details - GET /movie/:id
+ Movie genres - /GET /genre/movie/list
+ Trending Movies-GET /trending/movie/week – Fetches the most popular/trending movies of the week
+ Movie Reviews-GET /movie/:id/reviews – Fetches all reviews for a movie
+ Movie Recommendations-GET /movie/:id/recommendations – Fetches recommended movies based on a selected movie
+ Movie Credits - GET /movie/:id/credits – Fetches the cast and crew details for a movie

## Routing.
The following routes are supported in the application:
+ /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ / – Home page, displays the latest movies and general information.
+ /movies/favorites – Displays the user’s favorite movies.
+ /reviews/:id – Displays movie details along with any reviews for that particular movie.
+ /reviews/:id – Displays movie details along with any reviews for that particular movie.
+ /reviews/:id – Displays movie details along with any reviews for that particular movie.
+ /upcoming – Displays upcoming movies scheduled for release.
+ /trending – Displays the trending movies for the current week.
+ /movies/:id/recommendations – Displays a list of recommended movies for the current movie.
+ /movies/:id/credits – Displays the cast and crew of a particular movie.

Protected Routes:
This app does not include authentication; all routes are accessible to the public.(Several new features are integrated e.g. pagination, third-party authentication with Firebase, or similar may add to it)

## Independent learning (If relevant).

During the development of this project, I researched and implemented the following independent learning:

1.React Router v6:

+ Implemented dynamic routing and nested routes for pages like /movies/:id and /reviews/:id.
+ Implemented programmatic navigation and use of Link components for seamless transitions.


2.Material UI for Responsive Design:

+ Leveraged Material UI’s useMediaQuery hook to design responsive layouts, ensuring mobile-first design principles.

3.React Query for Efficient Data Fetching:

+ Used React Query for efficient data fetching, caching, and API call management to reduce unnecessary network traffic.


4.Error Handling and Retry Logic:

+ Implemented error boundaries and retry logic for API requests, especially for fetching movie details and popular/trending data.

5.Recommendations and Reviews Feature:

+ Researched TMDB API’s recommendations and reviews endpoints to display movie recommendations and all reviews dynamically.

6.Movie Credits Feature:

+ /movies/:id/credits – Displays the cast and crew of a particular movie.