import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  movies: [],
  movieDetails: [],
  searchedMovies: [],
};

// Define the reducers
const movieSlicer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.Movies = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
  },
});

// Export the actions (to set/change the state)
export const { setMovies, setMovieDetails, setSearchedMovies } =
  movieSlicer.actions;

// Export the reducers (state / store)
export default movieSlicer.reducer;
