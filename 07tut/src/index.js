import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Every route needs to start in routes */}
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  // Everything is attatched to a div with an ID of 'root'.
  document.getElementById('root')
);


