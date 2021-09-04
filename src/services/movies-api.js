const KEY = '6ac4e32d1093b7dba0b70adf814ac6f5';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchMovieById(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchMoviesByQuery(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=1&include_adult=false`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchMovieCast(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function fetchMovieReview(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`,
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}