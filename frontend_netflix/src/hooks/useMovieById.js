import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getMovieTeaser } from "../redux/movieSlice";

const useMovieById = async (movieId) => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );

    // console.log(res.data.results);
    const teaser = res?.data?.results?.filter((item) => {
      return item.type === "Teaser";
    });
    dispatch(
      getMovieTeaser(teaser.length > 0 ? teaser[0] : res.data.results[0])
    );
  } catch (error) {
    console.log(error);
  }
};

export default useMovieById;
