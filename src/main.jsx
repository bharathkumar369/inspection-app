import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//mport './index.css'
import inject from '@stylexjs/dev-runtime';

inject({
  classNamePrefix: 'x',
  dev: true,
  test: false,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
