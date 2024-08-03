import { lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"))
const Navigation = lazy(() => import("../Navigation/Navigation"))
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"))
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"))
const MovieCast = lazy(() => import("../MovieCast/MovieCast"))
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"))

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>Loading page...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
