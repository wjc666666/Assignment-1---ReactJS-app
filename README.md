# Assassin 1 - ReactJS app.

Name: Juncheng Wang

## Overview.

This repository contains the TMDB Client, a dynamic ReactJS application that allows users to explore various movies, view details, and manage their favorites and upcoming movies. It interacts with the TMDB API to fetch and display movie data.

### Features.
 

+ Trending Movies: A dynamic route (/trending) that displays the most popular or trending movies.
+ Feature 2
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

React Router v6: I researched how to implement dynamic routing and nested routes for movie details and reviews. This was essential for handling routes like /movies/:id and /reviews/:id.

Source: React Router Documentation
Material UI for responsive design: I implemented Material UI’s useMediaQuery hook to dynamically adjust the app’s layout between mobile and desktop views. This was used to create a mobile-friendly menu in the header and other responsive elements.

Source: Material UI - Responsive Design
React Query for data fetching: I used React Query to fetch movie data from the TMDB API with caching, refetching, and other advanced features to improve performance and reduce unnecessary API calls.

Source: React Query Documentation