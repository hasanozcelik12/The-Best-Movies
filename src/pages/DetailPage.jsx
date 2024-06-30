import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseImgUrl, options } from '../utils/constant';
import Loading from '../components/Loading';
import Badges from '../components/badget';

const DetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    axios.get(`movie/${movieId}`, options)
      .then((res) => setMovie(res.data));
  }, [movieId]);

  return (
    <div className='movie-detail grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
      {!movie ? (
        <Loading />
      ) : (
        <>
          <div className='col-span-1 md:col-span-1 flex justify-center'>
            <div className='relative' style={{ maxWidth: '400px' }}>
              <img
                className='rounded-lg shadow-lg w-full'
                src={baseImgUrl.concat(movie.poster_path)}
                alt=""
              />
              <p className='absolute bg-yellow-400 text-black text-xs rounded p-1 shadow bottom-0 right-0'>
                {movie.vote_average}
              </p>
            </div>
          </div>
          <div className='col-span-1 md:col-span-1'>
            <h1 className='text-3xl font-bold'>{movie.title}</h1>
            <p>{movie.overview}</p>

            <div className='my-4'>
              <Badges
                title="Kategoriler"
                list={movie.genres}
                color="bg-blue-500"
              />
              <Badges
                title="Diller"
                list={movie.spoken_languages}
                color="bg-red-500"
              />
              <Badges
                title="Yapımcı Şirketler"
                list={movie.production_companies}
                color="bg-green-500"
              />
            </div>

            <div>
              <p>Maliyet: {movie.budget}</p>
              <p>Hasılat: {movie.revenue}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
