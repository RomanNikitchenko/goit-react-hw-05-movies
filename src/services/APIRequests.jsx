import settings from './settings';

const { BASE_URL, API_KEY } = settings;

async function fetchSearchByKeyword(q, page) {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${q}&page=${page}`
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

async function fetchTrending(page = 1) {
  const response = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

async function fetchFullMovieInfo(id) {
  const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

async function fetchFullMovieCredits(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

async function fetchFullMovieReviews(id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

const api = {
  fetchSearchByKeyword,
  fetchTrending,
  fetchFullMovieInfo,
  fetchFullMovieCredits,
  fetchFullMovieReviews,
};

export default api;
