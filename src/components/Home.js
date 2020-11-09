import React from "react";
import "../css folder/home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/Borat2/no_ring/SENG_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_VAR-Daughter_1500X600_PV_fr-FR_176170._CB416710413_.jpg"
          alt=""
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="173345"
            title="Nike Running Shoes"
            price={1999}
            image="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
            rating={5}
          />
          <Product
            id="231123"
            title="Samsung Galaxy S10"
            price={70000}
            image="https://purepng.com/public/uploads/large/samsung-galaxy-s10-prism-front-6bx.png"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product id="23213232"
                    title="Haier Washing Machine"
                    price={35500}
                    image="https://lh3.googleusercontent.com/proxy/_SU-HkD3UIUdDwA-6GFBnfhYnQQO-9J0nGffsfZiDVQtIG2p43W26ffMzo8u4LluVYKYVeiG5EGFfDY-JvYEH2ws11GWoq9Xn3OXiRQ7ESILxAHEin5w7Zi-1HVNsQJ1YCbzY7vf9mjLfwjER49mhv64"
                    rating={3} 
           />
          <Product id="676565"
                   title="Samsung '30' inch Led Tv"
                   price={45000}
                   rating={5}
                   image="https://lh3.googleusercontent.com/proxy/QUG-qmMndyehPlWF5NEHieZkJXkymRj7Yd9EmM5yQ-nvtjmTNvCiBTPsmvP1jaoZiJ2jCbK6xjHrvYAMk2c9Kwp9CQwk-gY0PtII-PeSj2xdxofAMA"
            />
          <Product id="9373243"
                   title="Camel Mountain Bag"
                   price={2500}
                   rating={2}
                   image="https://www.pngarts.com/files/3/Travel-Backpack-PNG-Image.png"
           />
        </div>
        <div className="home__row"></div>
        <Product id="475434"
                  title="Computer Table"
                  price={21000}
                  rating={1}
                  image="https://i.pinimg.com/originals/c4/a7/a9/c4a7a911413810d79c197e3d20bb54de.png"
         />
      </div>
    </div>
  );
};

export default Home;