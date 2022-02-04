import React from 'react';
import ItemListContainer from '../src/components/ItemList/ItemListContainer';
import Navbar from '../src/components/NavBar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
