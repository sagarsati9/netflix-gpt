import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

   const dispatch = useDispatch(); 

 // fetch trailer video && updating store
 
 const getMovieVideos = async ()  => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId +'/videos?language=en-US', API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // trailer is in 0th index but if trailer is not present just take any other video to show
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // storing trailer video to redux store
    dispatch(addTrailerVideo(trailer));

 };

 useEffect(() => {
    getMovieVideos();
 },[]);

}

export default useMovieTrailer;