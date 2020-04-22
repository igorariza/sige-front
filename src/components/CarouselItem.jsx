import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

export const CarouselItem = () => {
  const urlImage =
    'https://res.cloudinary.com/duyflkcyn/image/upload/v1587040139/bjcvnyjhk7xnln24gevp-removebg-preview_krbgkv.png';
  return (
    <div className="carousel-item-sige">
      <img className="carousel-item-sige__imagen" src={urlImage} alt="" />
      <div className="carousel-item-sige__details">
        <div>
          <img
            className="carousel-item__details--img"
            src="https://img.icons8.com/nolan/64/play.png"
            alt=""
          />
          <img src="" alt="" />
        </div>
        <p className="carousel-item-sige__details--title">Titulo descriptivo</p>
        <p className="carousel-item-sige__details--subtitle">2019 febrero</p>
      </div>
    </div>
  );
};
