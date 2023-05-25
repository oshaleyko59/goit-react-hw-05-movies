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

//https://api.themoviedb.org/3/movie/550?api_key=b3cb1db782e55dafd1da39b95bd6f5f2
/* const instance = axios.create({
  //TODO:
  baseURL: BASE_URL,
  timeout: 2000,
}); */

/* const SEARCH_PARAMS = {
  key: `${MY_KEY}`,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

 #period = 'week'; //'week' or 'day' //TODO: check
  #searchQuery = 'Avatar'; //some default value


*//*
let backEndConfig = { test: 0 };
let poster_sizes = ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'];
 */
async function fetchTrendingMovies() {
  // /trending/get-trending
  try {
    const response= await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=1`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
/* async function fetchTrendingMovies(period) {
  // /trending/get-trending
  try {
    return await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=1`
    );
  } catch (error) {
    throw new Error(error.message);
  }
} */
async function fetchSearchMovies(searchQuery, page) {
  // /search/search-movies
  /*     //update property value if parameter supplied
    if (searchQuery) {
      this.#searchQuery = searchQuery;
    }
 */
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchQuery}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function fetchMovieDetails(id) {
  // /movies/get-movie-details
  try {
    const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function fetchMovieCast() {
  // /movies/get-movie-credits
  return null;
}

async function fetchMovieReviews() {
  // /movies/get-movie-reviews
  return null;
}

/*   async function fetchGenres() {
    const url = `${BASE_URL}genre/movie/list?api_key=${
      API_KEY
    }&language=en-US`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  } */

/*     async function fetchConf() {
    const url = `${BASE_URL}configuration?api_key=${API_KEY}`;
    try {
      const r = await axios.get(url);
      backEndConfig = r.data; //TODO: update property poster_sizes @fetchConf
      return r.data;
    } catch (error) {
      throw new Error(error.message);
    }
  } */
/*


  //***
  //  returns first size which is equal or larger then widthMin
  getPosterSize(widthMin) {
    for (let i = 0; i < this.poster_sizes.length; i += 1) {
      if (widthMin <= Number(this.poster_sizes[i].slice(1))) {
        return this.poster_sizes[i];
      }
    }
    return this.poster_sizes[this.poster_sizes.length - 1];
  }

  togglePeriod() {
    this.#period = this.#period === 'week' ? 'day' : 'week';
    return this.#period;
  } */
const api = {
  fetchTrendingMovies,
  fetchMovieCast,
  fetchMovieDetails,
  fetchMovieReviews,
  fetchSearchMovies,
};
export default api;
