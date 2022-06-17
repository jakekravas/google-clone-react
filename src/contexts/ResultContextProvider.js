import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('elon musk');

  // videos, search, /images
  const getResults = async type => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': '885f5ca3d5msh496c81a64858677p1f8cbejsn10791d7a82bd',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        // 'X-User-Agent': 'desktop',
        // 'X-Proxy-Location': 'EU',
        // 'X-RapidAPI-Key': '0817aa50f8mshee391710819d9c8p104573jsnbd9cbdbd7ba6',
        // 'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
      }
    });

    const data = await response.json();

    if (type.includes('/news')) {
      setResults(data.entries);
    } else if (type.includes('/image')) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    };

    console.log(data);
    setIsLoading(false);
  }

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);
