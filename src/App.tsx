import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteConfig from './Route'
import Quiz from './Components/Quiz'
import {configureNotification} from './services/firebaseService'

function App() {
  configureNotification()
  return (
    <div className="App">
      <RouteConfig />
    </div>
  );
}

export default App;
