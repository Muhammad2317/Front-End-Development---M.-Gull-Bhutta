import React from 'react';
import './style.css';

const Header = (props) => {
  return (
    <header><h1 className='headerTitle'>{props.title}</h1></header>
  )
};

Header.defaultProps = {
  title: 'Default'
}
export default Header;