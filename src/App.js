import React from 'react';
import Card from './components/Card';
import './App.css';

const album = {
  image: "https://img.discogs.com/pX6yZx7MpiwcfUbJ0ETXHLpkGI4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10206901-1493398173-2607.jpeg.jpg",
  artist: "Damso",
  name: "Ipséité",
  year: "2017"
}

function App() {
  return (
    <div className="App">
      <Card {...album}/>
    </div>
  );
}

export default App;
