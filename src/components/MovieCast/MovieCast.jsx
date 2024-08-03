import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId}/credits`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlkM2MwNzI2NmY3MjlmOTE4YzViMTg0OTQ2NDZlNCIsIm5iZiI6MTcyMjYyMzQ2OC42NzIxMzgsInN1YiI6IjY2YWQxNWZiODcyOTBhYTVkNDgyZjQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93cx3lBs7bYc-wO6ce7eBO2nxJPIE_yOC_-PjRDkPa8",
          },
        }
      );
      console.log(response.data.cast);
      setCasts(response.data.cast);
    };
    fetchCast();
  }, [moviesId]);

  return (
    <ul className={css.list}>
      {casts.map((cast) => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            width={100}
          ></img>
          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
