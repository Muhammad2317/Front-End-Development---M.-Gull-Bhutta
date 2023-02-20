import React, { useState, useRef } from 'react';
import './style.css';
import Content from './Content.js';
import Header from './header.js'
import Footer from './footer.js'
import AddItem from './AddItem.js'
import SearchItem from './SearchItem.js'

export default function App() {
  const inputRef = useRef();
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Shoppinglist')));
  const handleCheck = (id) => {
    const listItems = items.map((x) => x.id === id ? {...x, checked: !x.checked} : x);
    setAndSaveItems(listItems);
  }

  //The filter method used in the handleDelete() function will generate an array containing only the ids that are not equal to the id of the pressed button. Then the state is set to be equal to the const with the filter.
  //This will update 
  const handleDelete = (id) => {
    const listItems = items.filter((x) => x.id !== id );
    setAndSaveItems(listItems);
    }


  const [newItem, setNewItem] = useState('')
  const  setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('Shoppinglist', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length -1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem('');
  }


  const [search, setSearch] = useState('');
  return (
    <div>
      <Header title='HEADER'/>

      <SearchItem
       serch={search}
       setSearch={setSearch}
      />

      <AddItem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
       inputRef={inputRef}
      />

      <Content 
       items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
       setItems={setItems}  
       handleCheck={handleCheck} 
       handleDelete={handleDelete}/>

      <Footer title='FOOTER' length={items.length}/>
    </div>
  );
}
