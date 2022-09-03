import React, { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { tanyaOrAndyContext } from './Context.js';

function App() {

  const [tanyaOrAndy, setTanyaOrAndy] = useState('neither');

  return (
    <div className="App">
      <tanyaOrAndyContext.Provider value={{tanyaOrAndy, setTanyaOrAndy}}>
        <Navbar />
        <p className="navbarWarning">
          Only use the navbar if the QR codes do not work! If you must, click the link you need then refresh the page straight away. Don't cheat like a loser!
        </p>
        <header className="App-header">
          <p>
            Tanya & Her Bad Bitches' Scavenger Hunt
          </p>
        </header>

        <Outlet />
      </tanyaOrAndyContext.Provider>
    </div>
  );
}


export default App;

