import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useParams, Outlet } from "react-router-dom";
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
  const location = useLocation()
  const backLinkRef = useRef(location.state ?? "/")
  const { moviesId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchDetailsMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${moviesId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlkM2MwNzI2NmY3MjlmOTE4YzViMTg0OTQ2NDZlNCIsIm5iZiI6MTcyMjYyMzQ2OC42NzIxMzgsInN1YiI6IjY2YWQxNWZiODcyOTBhYTVkNDgyZjQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93cx3lBs7bYc-wO6ce7eBO2nxJPIE_yOC_-PjRDkPa8",
            },
          }
        );
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailsMovie();
  }, [moviesId]);

  return (<>
  <Link to={backLinkRef.current}><button type="button" className={css.button}>← Go back</button></Link>
    <div className={css.wrapper}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
      <h1>{movie.title}</h1>
      <h3>Overviews</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      {movie.genres && (
        <ul className={css.genresList}>
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
      </div>
    </div>
    <p>Additional information</p>
    <ul className={css.linkList}>
      <li><Link to="cast">Cast</Link></li>
      <li><Link to="reviews">Reviews</Link></li>
    </ul>
    <Outlet />
    </>
  );
};

export default MovieDetailsPage;
