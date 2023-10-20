import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  //calling apis for popular and now playing movies using custom hooks
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearchPage />) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

    </div>
  )
}

export default Browse;