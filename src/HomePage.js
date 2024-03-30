import React from 'react';
import './HomePage.scss';
import { Destinations, Home, Middle, Portfolio, Reviews, Questions, ChatBot, Subscribe } from './components';

function HomePage() {
  return (
      <div className="App">
        <Home/>
        <Destinations />
        <Middle />
        <Portfolio />
        <Reviews />
        <Questions />
        <ChatBot />
        <Subscribe />
      </div>
  );
}

export default HomePage;
