import React from 'react';
import Navbar from '../src/components/NavBar/Navbar'
import ItemCount from './components/ItemList/ItemCount';
import ItemListContainer from './components/ItemList/ItemListContainer';



function App() {
  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemCount initial="1" stock="15" />
    </div>
  );
}

export default App;
