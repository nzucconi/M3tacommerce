import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import Count from './components/ItemCount/ItemCount';

function App() {
  return(
    <div>
      <Navbar />
      <Shop />
    </div>
    )
};

export default App;
