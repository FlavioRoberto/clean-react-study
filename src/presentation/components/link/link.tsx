import React from 'React';
import './link-style.scss';

const Link = ({description}) => {
  return <span className='link center mt-1'>{description}</span>;
};

export default Link;