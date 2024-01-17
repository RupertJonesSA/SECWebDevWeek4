import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {StoreProvider} from 'easy-peasy';
import store from './store'; 

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          {/* Every route needs to start in routes */}
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  // Everything is attatched to a div with an ID of 'root'.
  document.getElementById('root')
);


