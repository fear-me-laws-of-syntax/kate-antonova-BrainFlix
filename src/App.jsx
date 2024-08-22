import Header from "./components/Header/Header";
import VideoMain from "./components/VideoMain/VideoMain";
import VideoMainDetails from "./components/VideoMainDetails/VideoMainDetails";
import CommentList from "./components/CommentList/CommentList";
// import videos from "./data/video-details.json";
// import VideoList from "./components/VideoList/VideoList";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from "./pages/HomePage/HomePage.jsx"
import UploadPage from "./pages/UploadPage/UploadPage.jsx"

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:id" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
