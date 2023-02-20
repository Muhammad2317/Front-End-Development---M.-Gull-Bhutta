import React, { useState }  from 'react';
import './style.css';
import LineItem from './LineItem.js'


const ListItem = ({items, handleCheck, handleDelete }) => {
  return (
        <ul>
            <h2 className='emptyMessage'>wish list</h2>
            {items.map((x) => (
              <LineItem item={x} handleCheck={handleCheck} handleDelete={handleDelete} key={x.id}/>
              ))}
        </ul>
  )
}

export default ListItem;