import axios from "axios";
import { setMovies, setMovieDetails } from "../reducers/postReducers";
import { toast } from "react-toastify";

export const getAllMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=117cdbfac10bbc3a44833dd1488f43f9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    dispatch(setMovies(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getMovieDetails = (params) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=3f5a55bd4c41a28d6071f4375ca61211&language=en-US`
    );
    dispatch(setMovieDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
