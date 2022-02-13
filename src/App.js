import React from 'react';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
import Navbar from '../src/components/NavBar/Navbar'
import ItemCount from './components/ItemList/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemCount Initial="1" Stock="5" />
    </div>
  );
}

export default App;
