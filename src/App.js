import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './containers/HomeScreen.jsx';
import {MyList} from './containers/MyList';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">Hubilo.com</div>
        </header>

        <main className="main">
          <div className="content">
            <Route exact={true} path="/" component={HomeScreen} />
            <Route exact={true} path="/myList" component={MyList}/>
          </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
