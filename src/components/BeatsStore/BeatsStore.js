import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Store from '../Store/Store';

function BeatsStore () {
  const beats = [
    {
      image: require('../../images/pop-smoke1.jpeg'),
      title: 'Pop-Smoke type beat "Switch"',
      price: '30.00',
      bpm: '140bpm'
    },
    {
      image: require('../../images/central-cee.jpeg'),
      title: 'Central Cee type beat "Let Go"',
      price: '45.00',
      bpm: '143bpm'
    },
    {
      image: require('../../images/digga-d.jpeg'),
      title: 'Digga D type beat "Mercy"',
      price: '35.00',
      bpm: '144bpm'
    },
    {
      image: require('../../images/fivio-foreign.jpeg'),
      title: 'Fivio Foreign type beat "Holy"',
      price: '50.00',
      bpm: '140bpm'
    },
    {
      image: require('../../images/sheff-g.jpeg'),
      title: 'Sheff G type beat "Outside"',
      price: '30.00',
      bpm: '155bpm'
    }
  ]

  const [shoppingCart, setShoppingCart] = useState({});

  function displayCartItems () {

  }

  function addItemToCart (event) {
    console.log(event.target.parentNode.parentNode);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='store' element={<Store beats={beats} addItemToCart={addItemToCart}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default BeatsStore;