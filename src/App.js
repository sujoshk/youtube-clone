import React from 'react';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import './App.css';

function App() {
  return (

    // BEM class naming convention
    <div className="App">
            
      <Header/>
      <SideBar/>
      <RecommendedVideos/>

      {/* Header */}

      {/* SideBar */}

      {/* Recommended Videos */}

    </div>
  );
}

export default App;

