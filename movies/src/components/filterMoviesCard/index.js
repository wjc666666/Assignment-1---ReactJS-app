import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../images/pexels-dziana-hasanbekava-5480827.jpg';
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

// Styles for form controls
const formControl = {
  margin: 1,
  minWidth: "90%",
  backgroundColor: "rgb(255, 255, 255)"
};

// FilterMoviesCard Component
export default function FilterMoviesCard(props) {
  // Fetch genres using React Query
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  // Display a spinner while genres are being fetched
  if (isLoading) {
    return <Spinner />;
  }

  // Handle errors during API call
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Get genres from the API response and ensure "All" is the first option
  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  // Generic function to handle changes in the filter inputs
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // Pass the filter type and value to the parent component
  };

  // Handle changes to the movie title filter
  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  // Handle changes to the genre filter
  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  // Handle changes to the actor filter (new functionality)
  const handleActorChange = (e) => {
    handleChange(e, "actor", e.target.value);
  };

  return (
    <Card
      sx={{
        backgroundColor: "rgb(204, 204, 0)"
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies
        </Typography>

        {/* Filter by movie title */}
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search by title"
          type="search"
          variant="filled"
          value={props.titleFilter} // Controlled input for title filter
          onChange={handleTextChange}
        />

        {/* Filter by genre */}
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter} // Controlled input for genre filter
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        {/* Filter by actor */}
        <TextField
          sx={{ ...formControl }}
          id="filled-search-actor"
          label="Search by actor"
          type="search"
          variant="filled"
          value={props.actorFilter} // Controlled input for actor filter
          onChange={handleActorChange}
        />
      </CardContent>

      {/* Card image */}
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />

      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
