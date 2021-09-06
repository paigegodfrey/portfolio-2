import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './components/Routes';
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
