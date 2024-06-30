import { useSelector } from 'react-redux';
import Loading from './Loading';
import { baseImgUrl } from '../utils/constant';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const TopRatedMovies = () => {
  const state = useSelector((store) => store.movies);

  return (
    <div className=" p-4">
   
      {state.isLoading && <Loading />}

      {!state.isLoading && (
        <>
          <h1 className="text-2xl font-bold mb-3">Toprated Movies</h1>
          <Splide 
            options={{
              autoWidth: true,
              gap: '10px',
              pagination: false,
            }}
          >
           
            {state.topRatedMovies.map((movie) => (
              <SplideSlide key={movie.id}>
               <Link to={`/movie/${movie.id}`}>
                  <img className="movie" src={baseImgUrl.concat(movie.backdrop_path)} alt="" />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </div>
  );
};

export default TopRatedMovies;
