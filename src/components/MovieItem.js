import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.scss";

function MovieItem({ poster, type, year, id }) {
  return (
    <Link to={id}>
      <div className="movieitem">
        <img src={poster} alt="Poster" />
        <p className="movieitem-type">{type}</p>
        <p className="movieitem-year">{year}</p>
      </div>
    </Link>
  );
}

export default MovieItem;
