import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as constants from './data.js';

console.log(constants.workflow[0].steps[0].title);

ReactDOM.render(
  <React.StrictMode>
    <App workflow={constants.pooWorkflow}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
