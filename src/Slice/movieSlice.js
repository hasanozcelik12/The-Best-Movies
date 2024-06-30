import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from '../utils/constant';


axios.defaults.baseURL = 'https://api.themoviedb.org/3';


export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async () => {
    const response = await axios.get('/movie/popular', options);
    return response.data.results;
  }
);

export const getTrending = createAsyncThunk(
  'movies/getTrending',
  async () => {
    const response = await axios.get('/trending/movie/day', options);
    return response.data.results;
  }
);
export const getTopRated = createAsyncThunk(
  'movies/getTopRated',
  async () => {
    const response = await axios.get('/movie/top_rated', options);
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    popularMovies: [],
    trendingMovies : [],
    topRatedMovies : [],
    isLoading: true, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload;
        state.isLoading = false;
      })
      .addCase(getMovies.rejected, (state) => {
        state.isLoading = false;
      })
      
      .addCase(getTrending.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrending.fulfilled, (state, action) => {
        state.trendingMovies = action.payload;
        state.isLoading = false;
      })
      .addCase(getTrending.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getTopRated.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.isLoading = false;
      })
      .addCase(getTopRated.rejected, (state) => {
        state.isLoading = false;
      })
  },
});


export default movieSlice.reducer;
