import React, { createContext, useContext, useState } from 'react'

const ResultContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search'

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // videos, search, /images
  const getResults = async url => {
    setIsLoading(true)

    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0817aa50f8mshee391710819d9c8p104573jsnbd9cbdbd7ba6',
        'X-RapidAPI-Host': 'google-search1.p.rapidapi.com'
      }
    });

    const data = await response.json()

    setResults(data);
    setIsLoading(false)
  }

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);
