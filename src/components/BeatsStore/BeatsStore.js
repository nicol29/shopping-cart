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
      id: 1,
      image: require('../../images/pop-smoke1.jpeg'),
      title: 'Pop-Smoke type beat "Switch"',
      price: '30.00',
      bpm: '140bpm'
    },
    {
      key: uniqid(),
      id: 2,
      image: require('../../images/central-cee.jpeg'),
      title: 'Central Cee type beat "Let Go"',
      price: '45.00',
      bpm: '143bpm'
    },
    {
      key: uniqid(),
      id: 3,
      image: require('../../images/digga-d.jpeg'),
      title: 'Digga D type beat "Mercy"',
      price: '35.00',
      bpm: '144bpm'
    },
    {
      key: uniqid(),
      id: 4,
      image: require('../../images/fivio-foreign.jpeg'),
      title: 'Fivio Foreign type beat "Holy"',
      price: '50.00',
      bpm: '140bpm'
    },
    {
      key: uniqid(),
      id: 5,
      image: require('../../images/sheff-g.jpeg'),
      title: 'Sheff G type beat "Outside"',
      price: '30.00',
      bpm: '155bpm'
    }
  ]

  const [shoppingCart, setShoppingCart] = useState([]);

  const [amount, setAmount] = useState('');

  function removeCartItem (event) {
    const itemToRemove = event.target.getAttribute('data-id');
    let temp = shoppingCart;
    console.log(itemToRemove - 1)
    temp = temp.splice(itemToRemove - 1, 1)
    setShoppingCart([...temp]);
    console.log(shoppingCart, 'after update');
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
        <Route path='/' element={<Navbar itemsInCart={shoppingCart} removeCartItem={removeCartItem}/>}>
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