import React from 'react';

import './App.css';
import Playlist from './Playlist'
import Home from './Home'
import Songs from './Songs'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'



function App() {
  return (


    
    <div className="App" id="back">
      <header className="App-header">
        
        <img src = "./musicapp.jpg" alt='musicapp'/>
      
         <Router>
           <div>
           <Link  to = "/home" > Home </Link>
           <Link  to = "/playlist" > Playlist </Link>
           <Link  to = "/songs" > Songs </Link>
           
           
           </div>
           
         <Switch>
           <Route path="/playlist">
            <Playlist />
           </Route>
           <Route path="/home">
              <Home />
           </Route>
           <Route path="/songs">
            <Songs/>
          </Route>
        </Switch>
       </Router>
      
      </header>
    </div>
  );
}

export default App;
