import React from 'react';

export const ContactIcon = (props) => {
  return (
    <a className="ml-3 mr-3" href={props.url}>
      <img src={props.icon} alt={props.name} />
    </a>
  );
};
