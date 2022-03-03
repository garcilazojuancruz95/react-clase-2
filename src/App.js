import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Navbar from '../src/components/NavBar/Navbar';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route 
              path='/' 
              element={
              <ItemListContainer /> 
              }
            />
            <Route 
              path='/:categoryId' 
              element={
              <ItemListContainer />
              } 
            />
            <Route 
              path='/:id' 
              element={
              <ItemDetailContainer />
              } 
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
