import React from 'react';
import '../assets/styles/components/ClientCarouselItem.scss';
export const ClientCarouselItem = (props) => {
  return (
    <div className="client-item">
      <img className="client-item__imagen" src={props.urlImage} alt="" />
      <a href="">{props.title}</a>
    </div>
  );
};
