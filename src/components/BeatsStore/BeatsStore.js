import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import uniqid from 'uniqid';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Store from '../Store/Store';

function BeatsStore () {
  const beats = [
    {
      key: uniqid(),
      image: require('../../images/pop-smoke1.jpeg'),
      title: 'Pop-Smoke type beat "Switch"',
      price: '30.00',
      bpm: '140bpm'
    },
    {
      key: uniqid(),
      image: require('../../images/central-cee.jpeg'),
      title: 'Central Cee type beat "Let Go"',
      price: '45.00',
      bpm: '143bpm'
    },
    {
      key: uniqid(),
      image: require('../../images/digga-d.jpeg'),
      title: 'Digga D type beat "Mercy"',
      price: '35.00',
      bpm: '144bpm'
    },
    {
      key: uniqid(),
      image: require('../../images/fivio-foreign.jpeg'),
      title: 'Fivio Foreign type beat "Holy"',
      price: '50.00',
      bpm: '140bpm'
    },
    {
      key: uniqid(),
      image: require('../../images/sheff-g.jpeg'),
      title: 'Sheff G type beat "Outside"',
      price: '30.00',
      bpm: '155bpm'
    }
  ]

  const [shoppingCart, setShoppingCart] = useState([]);

  const [amount, setAmount] = useState('');

  function displayCartItems () {

  }

  function changeAmount (event) {
    setAmount(event.target.value);
  }

  function addItemToCart (event) {
    const itemToAdd = event.target.parentNode.getAttribute('data-item');

    setShoppingCart([ ...shoppingCart, beats[itemToAdd]]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar itemsInCart={shoppingCart}/>}>
          <Route index element={<Home />} />
          <Route path='store' element={<Store 
            beats={beats} 
            addItemToCart={addItemToCart} 
            changeAmount={changeAmount}
            amount={amount}
            />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default BeatsStore;