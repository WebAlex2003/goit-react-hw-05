import css from "./MoviesPage.module.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${query}`,
            {
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlkM2MwNzI2NmY3MjlmOTE4YzViMTg0OTQ2NDZlNCIsIm5iZiI6MTcyMjYyMzQ2OC42NzIxMzgsInN1YiI6IjY2YWQxNWZiODcyOTBhYTVkNDgyZjQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93cx3lBs7bYc-wO6ce7eBO2nxJPIE_yOC_-PjRDkPa8",
              },
            }
          );
          setMovies(response.data.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

      fetchMovies();
    }
  }, [query]);

  const onSubmit = (event) => {
    event.preventDefault();
    const queryValue = event.target.elements.search.value.trim();
    setSearchParams({ query: queryValue });
  };

  return (
    <>
      <form className={css.form} action="" onSubmit={onSubmit}>
        <input className={css.input} type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {<MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
