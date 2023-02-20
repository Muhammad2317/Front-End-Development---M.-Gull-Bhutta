import React, { useState }  from 'react';
import './style.css';
import {FaPlus} from'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit, inputRef}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
       id='addItem'
       type='text'
       placeholder='Add Item'
       required
       value={newItem}
       onChange={(e) => setNewItem(e.target.value)}
       ref={inputRef}
       />
       <button
        type='submit'
        onClick={() => inputRef.current.focus()}><FaPlus/></button>
    </form>
  )
}
export default AddItem;