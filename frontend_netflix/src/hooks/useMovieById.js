import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { getMovieTeaser } from "../redux/movieSlice";
import { getBackgroundTeaser } from "../redux/movieSlice";

const useMovieById = (movieId, forBackground = false) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        console.log(res.data.results);
        const trailer = res?.data?.results?.filter(
          (item) => item.type === "Trailer"
        );
        if (forBackground) {
          dispatch(
            getBackgroundTeaser(
              trailer.length > 0 ? trailer[0] : res.data.results[0]
            )
          );
        } else {
          dispatch(
            getMovieTeaser(
              trailer.length > 0 ? trailer[0] : res.data.results[0]
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (movieId) {
      fetchMovieTrailer();
    }
  }, [movieId, dispatch, forBackground]);
};

export default useMovieById;
