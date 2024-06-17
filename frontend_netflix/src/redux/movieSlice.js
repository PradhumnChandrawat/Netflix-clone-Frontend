import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    toggle: false,
    Movieteaser: null,
  },
  reducers: {
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state, action) => {
      state.toggle = !state.toggle;
    },
    getMovieTeaser: (state, action) => {
      state.Movieteaser = action.payload;
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovie,
  getUpcomingMovie,
  setToggle,
  getMovieTeaser,
} = movieSlice.actions;
export default movieSlice.reducer;
