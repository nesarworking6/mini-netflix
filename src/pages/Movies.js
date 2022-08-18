import React, { useEffect, useState } from "react";
import movieApi from "api/movieApi";
import MovieItem from "components/MovieItem";
import Loading from "components/Loading";

import "./Movies.scss";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const response = await movieApi().get();
      if (response && response.data && response.data.Search) {
        setMovies(response.data.Search);
      }
      setIsLoading(false);
    } catch (err) {
      console.error("Error in fetching movies: ", err);
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <h2 className="page-title">Welcome to Mini Netflix!</h2>
      <div className="movies">
        {isLoading && <Loading />}

        {movies &&
          movies.map((item) => (
            <MovieItem
              key={item.imdbID}
              poster={item.Poster}
              type={item.Type}
              year={item.Year}
              id={item.imdbID}
            />
          ))}
      </div>
    </React.Fragment>
  );
}

export default Movies;
