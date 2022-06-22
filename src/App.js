import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Products from './components/Shop';
import Shop from './components/Products';

function App() {
  return(
    <div>
      <Navbar />
      <Shop />
    </div>
    )
};

export default App;
