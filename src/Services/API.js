import axios from 'axios';

const API_KEY = 'c2a26e70c421b57c15e525ec78008ee0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

async function fetchTrendMovies() {
  const response = await axios('trending/movie/day?', {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
}

async function fetchMovie(movieName) {
  const response = await axios('search/movie?', {
    params: {
      api_key: API_KEY,
      query: movieName,
    },
  });
  return response.data.results;
}

async function fetchMovieDetails(movieId) {
  const response = await axios(`movie/${movieId}?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
}

async function fetchMovieActors(movieId) {
  const response = await axios(`movie/${movieId}/credits?`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
}

async function fetchMovieReviews(movieId) {
  const response = await axios(
    `movie/${movieId}/reviews?language=en-US&page=1&`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data.results;
}

async function fetchActorImg(profile_path) {
  return `https://image.tmdb.org/t/p/w500${profile_path}`;
}

export {
  fetchTrendMovies,
  fetchMovie,
  fetchMovieDetails,
  fetchMovieActors,
  fetchActorImg,
  fetchMovieReviews,
};
