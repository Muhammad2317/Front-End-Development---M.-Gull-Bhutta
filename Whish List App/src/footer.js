import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer><h1>{props.length} List {props.length === 1 ? 'Item' : 'items'}</h1></footer>
  )
};
export default Footer;