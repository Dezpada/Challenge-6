import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  movies: [],
  movieDetails: [],
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
  },
});

// Export the actions (to set/change the state)
export const { setMovies, setMovieDetails } = movieSlicer.actions;

// Export the reducers (state / store)
export default movieSlicer.reducer;
