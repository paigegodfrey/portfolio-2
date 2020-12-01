import React from 'react';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Routes from './components/Routes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
