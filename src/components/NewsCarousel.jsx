import React from 'react';
import '../assets/styles/components/NewsCarousel.scss';

export const NewsCarousel = ({ children }) => {
  return (
    <div className="discover__sige">
      <div className="news__carousel__container">{children}</div>
    </div>
  );
};
