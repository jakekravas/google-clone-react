import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { ResultContextProvider } from './contexts/ResultContextProvider'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ResultContextProvider>
    <Router>
      <App/>
    </Router>,
  </ResultContextProvider>
  // document.getElementById('root')
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

