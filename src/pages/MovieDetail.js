import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storeMovie } from "store/movieSlice";
import movieApi from "api/movieApi";
import Loading from "components/Loading";

import "./MovieDetail.scss";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const movies = useSelector((state) => state.movie.details);
  const dispatch = useDispatch();

  const loadMovie = useCallback(async () => {
    let storedMovie;
    if (movies && Array.isArray(movies) && movies.length > 0) {
      storedMovie = movies.find((m) => m.imdbID === id);
    }

    if (storedMovie) {
      setMovie(storedMovie);
    } else {
      try {
        setIsLoading(true);
        const response = await movieApi(id).get();
        if (response && response.data && !response.data.Error) {
          dispatch(storeMovie(response.data));
          setMovie(response.data);
        }
        setIsLoading(false);
      } catch (err) {
        console.error("Error in fetching movie: ", err);
        setIsLoading(false);
      }
    }
  }, [dispatch, id, movies]);

  useEffect(() => {
    loadMovie();
  }, [loadMovie]);

  if (isLoading) {
    return <Loading />;
  }

  if (!movie) {
    return <p className="no-data">There are no data.</p>;
  }

  return (
    <div className="flex-gap-md movie-detail">
      <img src={movie.Poster} alt="Poster" className="movie-detail__poster" />
      <div className="movie-detail__text">
        <h2 className="movie-detail__title">{movie.Title}</h2>
        <p className="movie-detail__plot">{movie.Plot}</p>
        <span className="movie-detail__rating">{movie.imdbRating} / 10</span>
      </div>
    </div>
  );
}

export default MovieDetail;
