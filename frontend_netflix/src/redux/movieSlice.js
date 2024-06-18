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
    backgroundTeaser: null,
    open: false,
    id: "",
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
    getBackgroundTeaser: (state, action) => {
      state.backgroundTeaser = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
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
  getBackgroundTeaser,
  setOpen,
  getId,
} = movieSlice.actions;
export default movieSlice.reducer;
