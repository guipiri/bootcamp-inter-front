import React from 'react';
import CardGroups from '../components/Home/CardGroups';
import CarouselHome from '../components/Home/Carousel';
import NavBar from '../components/Home/NavBar';

function Home() {
  return (
    <div>
      <NavBar/>
      <CarouselHome/>
      <CardGroups />
    </div>
  );
};

export default Home;
