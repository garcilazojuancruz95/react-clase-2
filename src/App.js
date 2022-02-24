import React from 'react';
import ItemList from '../src/components/ItemList/ItemList';
import Navbar from '../src/components/NavBar/Navbar'
import ItemCount from './components/ItemList/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <ItemCount initial="1" stock="15" />
    </div>
  );
}

export default App;
