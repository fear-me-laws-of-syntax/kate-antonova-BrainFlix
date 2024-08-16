import { useState } from 'react';

import './App.scss';

// import Logo from "../components/Logo";
// import CardList from "./components/CardList/CardList";
// import ActivityList from "./components/ActivityList/ActivityList";
// import Footer from "./components/Footer/Footer";

import React from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

import VideoMain from "./components/VideoMain/VideoMain"


function App() {
  return (
    <>
      <div>
        <Header />
      </div>
         {/* <Button /> */}

         <VideoMain />
    </>
  );
}

export default App;
