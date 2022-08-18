import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export default function axiosInstance(id, title = "batman") {
  let baseURL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
  if (id) {
    baseURL += `&i=${id}`;
  } else {
    baseURL += `&s=${title}&plot=full`;
  }
  return axios.create({ baseURL });
}
