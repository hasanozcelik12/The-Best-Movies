import { useSelector } from 'react-redux';
import Loading from './Loading';
import { baseImgUrl } from '../utils/constant';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

const PopularMovies = () => {
  const state = useSelector((store) => store.movies);
  console.log(state);

  return (
    <div className=" p-4">
      {state.isLoading && <Loading />}
      {!state.isLoading && (
        <>
          <h1 className="text-2xl font-bold mb-3">Popular Movies</h1>
          <Splide 
            options={{
              autoWidth: true,
              gap: '10px',
              pagination: false,
            }}
          >
            {state.popularMovies.map((movie) => (
              <SplideSlide key={movie.id}>
               <Link to={`/movie/${movie.id}`}>
                  <img className="movie" src={baseImgUrl.concat(movie.backdrop_path)} alt={movie.title} />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </div>
  );
};

export default PopularMovies;
