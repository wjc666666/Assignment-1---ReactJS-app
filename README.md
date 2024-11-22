# Assassin 1 - ReactJS app.

Name: Juncheng Wang

## Overview.

This repository contains the TMDB Client, a dynamic ReactJS application that allows users to explore various movies, view details, and manage their favorites and upcoming movies. It interacts with the TMDB API to fetch and display movie data,, providing an engaging user experience with dynamic routing and interactive features.


### Features.
 

+ Trending Movies: A dynamic route (/trending) that displays the most popular or trending movies.
+ Popular Movies: A new dynamic route (/popular) that lists the most popular movies worldwide, updated weekly.
+ Feature 3
+ etc
+ etc

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

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Discover list of movies - GET /trending/movie/week – Fetches the most popular/trending movies of the week.

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

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

Protected Routes:
There are no specific authentication requirements for this app; all routes are accessible to the public.

## Independent learning (If relevant).

During the development of this project, I researched and implemented the following independent learning:

1.React Router v6:

+ Implemented dynamic routing and nested routes for pages like /movies/:id and /reviews/:id.


2.aterial UI for Responsive Design:

+ Utilized Material UI’s useMediaQuery hook for mobile-first responsive layouts.


3.React Query for Efficient Data Fetching:

+ Used React Query for efficient data fetching, caching, and API call management to reduce unnecessary network traffic.


4.Error Handling and Retry Logic:

+ Implemented error boundaries and retry logic for API requests, especially for fetching movie details and popular/trending data.