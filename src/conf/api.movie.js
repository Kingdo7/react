import * as axios from "axios";
import { Movie } from '../features/movies/models/movie';

export const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDU4YTQ0ZWU3MzUwMDdkMzA2MWI2MjcxYTE4MDZiNCIsInN1YiI6IjYyMjlkNGQ4MDY5ZjBlMDAxZDlmM2VhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cuV_9dxpVt1Zf1MsKdh8a12sfgWKUw6efyHTVQONEoM';

export const urlApiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/4',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 4000
});

urlApiMovie.interceptors.request.use(req => {
  req.headers['Authorization'] = 'Bearer ' + API_TOKEN;
  return req;
});

export const mapMovies = movies => 
  movies.map(m => new Movie(
    m.id,
    m.title,
    'https://image.tmdb.org/t/p/w500' + m.poster_path,
    `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
    m.overview
  )
);
