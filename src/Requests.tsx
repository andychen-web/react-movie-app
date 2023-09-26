const key = process.env.REACT_APP_IMDB_API_KEY;

// 定義request endpoints
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestAnime: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
