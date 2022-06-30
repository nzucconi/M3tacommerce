import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Shop/ItemListContainer';

function App() {
  return(
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
    )
};

export default App;
