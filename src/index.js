import React from 'react';
import ReactDOM from 'react-dom/client';
import VideoPlayer from './components/VideoPlayer.jsx';
import CarrouselNutritionFrance from './components/CarrouselNutritionFrance.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideoPlayer />
    <CarrouselNutritionFrance />
  </React.StrictMode>
);