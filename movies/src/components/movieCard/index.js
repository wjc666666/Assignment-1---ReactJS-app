import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";

export default function MovieCard({ movie, action = () => null }) {
  const { addToFavorites, addToMustWatch } = useContext(MoviesContext);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    addToMustWatch(movie); 
  };

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {movie.title}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <IconButton onClick={handleAddToPlaylist}>
          <PlaylistAddIcon />
        </IconButton>
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}