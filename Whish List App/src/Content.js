import React, { useState } from 'react';
import ListItem from './itemList.js'
import './style.css';

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <main className='WLmain'>
      {items.length ? (
        <ListItem items={items}  handleCheck={handleCheck} handleDelete={handleDelete}/>
      ): (<h2 className='emptyMessage'>Your wish list is empty</h2>)}
    </main>
  )};

export default Content;
