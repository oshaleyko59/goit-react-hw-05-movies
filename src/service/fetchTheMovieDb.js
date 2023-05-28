/* *****************************************************************************
Кінопошук:
-бекенд  themoviedb.org API(https://developers.themoviedb.org/3/getting-started/introduction)
-ендпоінти:
  /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
  /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
  /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
  /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
  /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
*/

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b3cb1db782e55dafd1da39b95bd6f5f2';

const controller = new AbortController();

function abortFetch() {
  if (controller) {
    controller.abort();
    console.log('Fetch aborted');
  } else {
    console.log('Fetch abort called, no controller');
  }
}

// /trending/get-trending
async function fetchTrendingMovies() {
  try {
    const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=1`;
    const response = await axios.get(url, { signal: controller.signal });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function fetchSearchMovies(searchQuery, page = 1) {
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchQuery}`;
    const response = await axios.get(url, { signal: controller.signal });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// /movies/get-movie-details
async function fetchMovieDetails(id) {
  try {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url, { signal: controller.signal });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// /movies/get-movie-credits
async function fetchMovieCast(id) {
  try {
    const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`;
    const response = await axios.get(url, { signal: controller.signal });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// /movies/get-movie-reviews
async function fetchMovieReviews(id) {
  try {
    const url = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(url, { signal: controller.signal });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const api = {
  fetchTrendingMovies,
  fetchMovieCast,
  fetchMovieDetails,
  fetchMovieReviews,
  fetchSearchMovies,
  abortFetch,
};

export default api;

/*
poster_sizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
 */
