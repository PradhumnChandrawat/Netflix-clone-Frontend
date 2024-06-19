export const API_END_POINT =
  "https://netflix-clone-backend-v2.onrender.com/api/v1/user";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDhlMWI2OGVhMmU1YmU5MDAzOWQ4MzNjYTVmNjNjNyIsInN1YiI6IjY2MGMyMmU5OWM5N2JkMDE3Y2E1NDIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tSKtn6xEm0slIrslLSDblNwMPK9wrSomnQL2TrvqKUI",
  },
};

export const Now_Playing_Movies =
  "https://api.themoviedb.org/3/movie/now_playing";

export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";

export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";

export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_IMG_Url = "https://image.tmdb.org/t/p/w500";

export const SEARCH_MOVIES_URL =
  "https://api.themoviedb.org/3/search/movie?query=";
