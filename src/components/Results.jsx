import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';
import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  if (isLoading) return <Loading/>
  console.log(location.pathname);

  switch (location.pathname) {
    case './search':
      return 'SEARCH'
  
    default:
      return 'ERROR'
  }
}

export default Results;
