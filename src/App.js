import React from 'react';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
import Navbar from '../src/components/NavBar/Navbar'
import ItemCount from './components/ItemList/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
