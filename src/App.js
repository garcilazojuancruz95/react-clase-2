import React from 'react';
import Navbar from '../src/components/NavBar/Navbar'
import ItemCount from './components/ItemList/ItemCount';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { customFetch } from './utils/customFetch';
const {productos} = require('./utils/productos')


function App() {
  
  customFetch(2000, productos)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemCount initial="1" stock="15" />
    </div>
  );
}

export default App;
