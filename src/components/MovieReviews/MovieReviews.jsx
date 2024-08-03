import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId}/reviews`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODlkM2MwNzI2NmY3MjlmOTE4YzViMTg0OTQ2NDZlNCIsIm5iZiI6MTcyMjYyMzQ2OC42NzIxMzgsInN1YiI6IjY2YWQxNWZiODcyOTBhYTVkNDgyZjQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93cx3lBs7bYc-wO6ce7eBO2nxJPIE_yOC_-PjRDkPa8",
          },
        }
      );
      setReviews(response.data.results);
      console.log(response.data.results);
    };
    fetchReviews();
  }, [moviesId]);

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h3>{`Author: ${review.author}`}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
