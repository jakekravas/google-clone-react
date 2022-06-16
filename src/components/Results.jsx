import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Loading from './Loading';
import { useResultContext } from '../contexts/ResultContextProvider';

const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    // getResults('/search/q=javascript&num=40')
    getResults('search/q=kate+upton')
  }, [])

  if (isLoading) return <Loading/>
  console.log(location.pathname);

  switch (location.pathname) {
    case '/search':
      return (

        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>

          {/* Render search results */}
          {results?.results?.map(({link, title}, index) => (
            <div key={index} className='md:w-2/5 w-full'>
              <a href={link} target='_blank' rel='noreferrer'>
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
              </a>
            </div>
          ))}

        </div>
      )
            
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.image_results?.map(({image, link: { href, title}}, index) => (
            <a href={href} key={index} target='_blank' rel='noreferrer' className='sm:p-3 p-5'>
              <img src={image?.src} alt={title} loading='lazy'/>
              <p className='w-36 break-words text-sm mt-2'>
                {title}
              </p>
            </a>
          ))}
        </div>
      )
    // case '/news':
    //   return ()
    // case '/videos':
    //   return ()
       
    default:
      return 'ERROR'
  }
}

export default Results;
