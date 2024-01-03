import Header from './Header'; 
import Content from './Content'; 
import Footer from './Footer';
import { useState } from 'react';

// JSX -> Allows us to implement html stlye code with
// javascript components. 
function App() {
  // Default state given a list of objects
  const [items, setItems] = useState([
    {
      id: 1, 
      checked: false,
      item: "One half pound bag of Cocoa"
    },
    {
      id: 2, 
      checked: false,
      item: "Item 2"
    },
    {
      id: 3, 
      checked: false,
      item: "Item 3"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, 
    checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));  
  }
  
  const handleDelete = (id) =>{
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shopppinglist', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="Grocery List"></Header>
      <Content 
        // Drilling props to content component
        items={ items }
        handlecheck={ handleCheck }
        handleDelete={ handleDelete }
      ></Content>
      <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
