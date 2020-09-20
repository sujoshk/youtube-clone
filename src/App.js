import React from 'react';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import './App.css';

import SearchPage from './components/SearchPage';


import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    // BEM class naming convention
    <div className="App">         

      <Router>
        <Header/>
        <Switch>

          <Route exact path="/search/:searchTerm">
            <h1>App Page</h1>
              <div className="app__page">
                <SideBar />
                <SearchPage/>
              </div>
          </Route>




          <Route exact path="/">
            <h1>App Page</h1>
              <div className="app__page">
                <SideBar />
                <RecommendedVideos/>
              </div>
          </Route>

     

          
        </Switch>
        
      </Router>    
      

      
      

    </div>
  );
}

export default App;

