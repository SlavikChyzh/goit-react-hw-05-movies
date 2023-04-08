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

export { fetchTrendMovies, fetchMovie };
