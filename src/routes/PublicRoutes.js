import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Movies from "pages/Movies";
import MovieDetail from "pages/MovieDetail";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/movie" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/" element={<Navigate to="/movie" replace />} />

      <Route path="/notfound" element={<h1>404: page not found</h1>} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Routes>
  );
}

export default PublicRoutes;
