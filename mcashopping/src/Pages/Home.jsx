import React from 'react'
import Announcement from '../Components/Announcement/Announcement';
import Categories from '../Components/Categories/Categories';
import Navbar from '../Components/Navbar/Navbar';
import Products from '../Components/Products/Products';
import Slider from '../Components/Slider/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home;
