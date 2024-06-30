import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies,getTopRated,getTrending } from '../Slice/movieSlice';
import PopularMovies from '../components/PopularMovies';
import TrendingMovies from '../components/TrendingMovies';
import TopRatedMovies from '../components/TopRatedMovies';
// import MovieList from '../components/MovieList';

const MainPages = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getTrending());
    dispatch(getTopRated());
  }, [dispatch]);

  console.log(state); 

  return (
    <div>
      <PopularMovies/>
      <TrendingMovies/>
      <TopRatedMovies/>
    </div>
  );
};

export default MainPages;
