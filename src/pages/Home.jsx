import React from 'react';
import banner from '../assets/food.jpeg';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () =>{
  return(
    <div>
     <div className="home" style={{backgroundImage:`url(${banner})`}}>
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK.</p>
        <Link to='/menu'>
        <button >Order Now</button>
        </Link>
      </div>
     </div>

    </div>
  )
}

export default Home;