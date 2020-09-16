import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteConfig from './Route'
import Quiz from './Components/Quiz'

function App() {
  require('dotenv').config()
  return (
    <div className="App">
      <RouteConfig />
    </div>
  );
}

export default App;
