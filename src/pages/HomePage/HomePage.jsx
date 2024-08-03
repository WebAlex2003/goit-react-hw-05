import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import axios from "axios";


const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlkM2MwNzI2NmY3MjlmOTE4YzViMTg0OTQ2NDZlNCIsIm5iZiI6MTcyMjYyMzQ2OC42NzIxMzgsInN1YiI6IjY2YWQxNWZiODcyOTBhYTVkNDgyZjQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93cx3lBs7bYc-wO6ce7eBO2nxJPIE_yOC_-PjRDkPa8',
            },
          });
          setMovies(response.data.results)
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies()
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies}/>
    </div>
  );
};

export default HomePage;
