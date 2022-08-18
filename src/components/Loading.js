import React from "react";
import "./Loading.scss";

function Loading({ title = "Loading...", ...rest }) {
  return (
    <p className="loading" {...rest}>
      {title}
    </p>
  );
}

export default Loading;
