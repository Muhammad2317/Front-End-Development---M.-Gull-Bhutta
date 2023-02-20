import React, { useState }  from 'react';
import './style.css';

const LineItem = ({item, handleCheck, handleDelete }) => {
  return (
    <li className='item'>
              <input type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)}/>
              <label
                style={(item.checked) ? {textDecoration: 'line-through'}: null}
                onDoubleClick={() => handleCheck(item.id)}
              >{item.item}</label>
              <button onClick={() => handleDelete(item.id)} aria-label='hello'>Delete</button>
    </li>
  )
}
export default LineItem;